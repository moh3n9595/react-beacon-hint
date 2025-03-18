/**
 * @vitest-environment node
 */

import {__resetForTest, injectUniqueKeyframe} from './cssInjector';

import {isOnServer} from '../constants';

describe('injectUniqueKeyframe (SSR mode)', () => {
	beforeEach(() => {
		// Reset the internal stylesheet to simulate no DOM.
		__resetForTest();
	});

	it('should return empty values when running on the server', () => {
		const {animationName, rulesLength} = injectUniqueKeyframe(
			'0% { opacity: 0; } 100% { opacity: 1; }',
			'fade-in',
		);
		expect(animationName).toBe('');
		expect(rulesLength).toBe(0);
	});

	it('window should be undefined in ssr', () => {
		expect(isOnServer).toBe(true);
	});
});
