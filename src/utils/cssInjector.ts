import {isOnServer} from './hydration';

let styleSheet: CSSStyleSheet | undefined = undefined;

if (!isOnServer) {
	const styleEl = document.createElement('style');
	styleEl.setAttribute('data-testid', 'injectUniqueKeyframe');
	document.head.appendChild(styleEl);
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	styleSheet = styleEl.sheet!;
}

export const injectUniqueKeyframe = (keyframe: string, name: string) => {
	if (styleSheet === undefined) {
		return {animationName: '', rulesLength: 0};
	}

	// eslint-disable-next-line no-useless-escape
	const escapedName = name.replace(/[\(|\)|\,|\ |\#|\%]/g, '');
	const animationName = `animation-${escapedName}`;
	const keyframes = `
		@keyframes ${animationName} {
			${keyframe}
		}`;

	styleSheet?.insertRule(keyframes, styleSheet?.cssRules?.length);
	const uniqueRules: string[] = [];
	const uniqueIndexes: number[] = [];
	for (let index = 0; index < styleSheet?.cssRules?.length; index++) {
		if (
			typeof styleSheet?.cssRules[index]?.cssText === 'string' &&
			!uniqueRules.includes(styleSheet?.cssRules[index]?.cssText)
		) {
			uniqueRules.push(styleSheet?.cssRules[index]?.cssText);
			uniqueIndexes.push(index);
		}
	}
	for (let index = 0; index < styleSheet?.cssRules?.length; index++) {
		if (!uniqueIndexes.includes(index)) {
			styleSheet?.deleteRule(index);
		}
	}

	return {animationName, rulesLength: styleSheet?.cssRules?.length};
};
