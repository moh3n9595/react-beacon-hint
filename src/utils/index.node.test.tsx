/**
 * @vitest-environment node
 */

import {injectUniqueKeyframe} from './cssInjector';
import {isOnServer} from './hydration';

describe('injectUniqueKeyframe', () => {
	it('should set keyframes', () => {
		const firstRule = 'first-test';
		const keyframe = `0% {
			transform: scale(0.5);
			box-shadow: 0 0 0 0 red;
		}
		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
		}`;

		const {rulesLength: firstAnimationNameRulesLength} = injectUniqueKeyframe(keyframe, firstRule);
		expect(firstAnimationNameRulesLength).toBe(0);
	});
});

describe('hydration', () => {
	it('window should be undefined in ssr', () => {
		expect(isOnServer).toBe(true);
	});
});
