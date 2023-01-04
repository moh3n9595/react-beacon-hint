import {injectUniqueKeyframe} from './cssInjector';

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
