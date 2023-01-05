import storage from 'local-storage-fallback';
import {injectUniqueKeyframe} from './cssInjector';
import {generateHash} from './hashGenerator';
import {manageHit, STORAGE} from './hitManager';
import {renderHook} from '../test/utils';
import {useSkipMountEffect} from './useSkipMountEffect';

const mocks = {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	useSkipMountEffectCallback: () => {},
};
const spy = vi.spyOn(mocks, 'useSkipMountEffectCallback');

describe('injectUniqueKeyframe', () => {
	it('should set keyframes', () => {
		const firstRule = 'first-test';
		const secondRule = 'second-rule';
		const keyframe = `0% {
			transform: scale(0.5);
			box-shadow: 0 0 0 0 red;
		}
		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
		}`;

		const {rulesLength: firstAnimationNameRulesLength} = injectUniqueKeyframe(keyframe, firstRule);
		expect(firstAnimationNameRulesLength).toBe(1);

		const {rulesLength: secondAnimationNameRulesLength} = injectUniqueKeyframe(keyframe, secondRule);
		expect(secondAnimationNameRulesLength).toBe(2);

		const {rulesLength: thirdAnimationNameRulesLength} = injectUniqueKeyframe(keyframe, secondRule);
		expect(thirdAnimationNameRulesLength).toBe(2);

		const {rulesLength: fourthAnimationNameRulesLength} = injectUniqueKeyframe(keyframe, firstRule);
		expect(fourthAnimationNameRulesLength).toBe(2);
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

describe('manageHit', () => {
	it('should set 0 default', () => {
		const key = 'test-key';
		const {occurred} = manageHit(key);

		expect(occurred).toBe(0);
	});

	it('should set 1 default with increase', () => {
		const key = 'test-key';
		const {occurred} = manageHit(key, {increase: true});
		expect(occurred).toBe(1);

		const {occurred: occurredAgain} = manageHit(key, {increase: true});
		expect(occurredAgain).toBe(2);
	});

	it('should resolve broken storage items', () => {
		storage.setItem(STORAGE, '-{---}');
		const key = 'test-key';
		const {occurred} = manageHit(key, {increase: true});
		expect(occurred).toBe(1);
	});
});

describe('useSkipMountEffect', () => {
	it('should be true on first render and false after', () => {
		const {rerender, result} = renderHook(({test}) => useSkipMountEffect(mocks.useSkipMountEffectCallback, [test]), {
			initialProps: {test: 1},
		});
		expect(result.current).toBe(true);
		rerender({test: 2});
		expect(spy).toBeCalled();
		expect(result.current).toBe(false);
	});
});
