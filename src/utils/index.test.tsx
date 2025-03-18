import storage from 'local-storage-fallback';

import {
	__resetForTest,
	getStylesheet,
	injectUniqueKeyframe,
} from './cssInjector';
import {generateHash} from './hashGenerator';
import {HitStorageManager} from './hitStorageManager';

import {isOnServer} from '../constants';

describe('injectUniqueKeyframe (CSR mode)', () => {
	beforeEach(() => {
		__resetForTest();
	});

	it('should initialize and return a stylesheet on the client', () => {
		const styleSheet = getStylesheet();
		expect(styleSheet).toBeDefined();
		expect(
			document.querySelector('style[data-testid="injectUniqueKeyframe"]'),
		).not.toBeNull();
	});

	it('should generate a unique animation name and inject keyframes', () => {
		const keyframe = `0% { transform: scale(0.5); } 100% { transform: scale(1); }`;
		const {animationName, rulesLength} = injectUniqueKeyframe(
			keyframe,
			'scale-up',
		);

		expect(animationName).toBe('animation-scale-up');
		expect(rulesLength).toBe(1);
	});

	it('should not duplicate keyframes with the same name', () => {
		const keyframe = `0% { opacity: 0; } 100% { opacity: 1; }`;
		injectUniqueKeyframe(keyframe, 'fade-in');
		const {rulesLength} = injectUniqueKeyframe(keyframe, 'fade-in');

		expect(rulesLength).toBe(1);
	});

	it('should increase rules count when adding different keyframes', () => {
		injectUniqueKeyframe('0% { opacity: 0; } 100% { opacity: 1; }', 'fade-in');
		injectUniqueKeyframe(
			'0% { transform: scale(0.8); } 100% { transform: scale(1); }',
			'scale-up',
		);
		const {rulesLength} = injectUniqueKeyframe(
			'0% { left: 0; } 100% { left: 100px; }',
			'slide-right',
		);

		expect(rulesLength).toBe(3);
	});

	it('should properly clean up duplicate rules', () => {
		const keyframe = `0% { opacity: 0; } 100% { opacity: 1; }`;
		injectUniqueKeyframe(keyframe, 'fade-in');
		injectUniqueKeyframe(keyframe, 'fade-in'); // Duplicate

		const sheet = getStylesheet();
		expect(sheet?.cssRules.length).toBe(1);
	});

	it('should not reinitialize the stylesheet if already initialized', () => {
		const firstStylesheet = getStylesheet();
		const secondStylesheet = getStylesheet();

		expect(firstStylesheet).toBe(secondStylesheet);
	});

	it('window should not be undefined in csr', () => {
		expect(isOnServer).toBe(false);
	});
});

describe('generateHash', () => {
	it('should generate same hash', () => {
		const text = 'gAhu#$H%Hgdfuygsd';
		const hash1 = generateHash(text);
		const hash2 = generateHash(text);

		expect(hash1).toBe(hash2);
	});
});

describe('HitStorageManager', () => {
	const key = 'test-key';
	const STORAGE_KEY = 'react-beacon-hint';

	beforeEach(() => {
		// Clear local storage before each test
		storage.removeItem(STORAGE_KEY);
	});

	it('should return a default hit count of 0 when getting a non-existent key', () => {
		const hitData = HitStorageManager.get(key);
		expect(hitData.occurred).toBe(0);
	});

	it('should increase the hit count properly', () => {
		// Increase should initialize the count to 1 on first call.
		const firstIncrease = HitStorageManager.increase(key);
		expect(firstIncrease.occurred).toBe(1);

		// Increased value should be still 1 when getting the key.
		const firstIncreased = HitStorageManager.get(key);
		expect(firstIncreased.occurred).toBe(1);

		// A subsequent increase should bump the count to 2.
		const secondIncrease = HitStorageManager.increase(key);
		expect(secondIncrease.occurred).toBe(2);
	});

	it('should resolve broken storage items', () => {
		// Simulate a broken storage value
		storage.setItem(STORAGE_KEY, '-{---}-');
		const hitData = HitStorageManager.increase(key);
		expect(hitData.occurred).toBe(1);
	});
});
