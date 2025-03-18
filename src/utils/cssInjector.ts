import {isOnServer} from '../constants';

/** Result returned after attempting to inject a keyframe rule. */
export interface InjectResult {
	/** The generated animation name (empty if injection did not occur). */
	animationName: string;
	/** The total number of CSS rules in the stylesheet after injection. */
	rulesLength: number;
}

/** Internal reference to the stylesheet. */
let styleSheet: CSSStyleSheet | undefined;

/** Flag indicating whether the stylesheet has been initialized. */
let initialized = false;

/**
 * Initializes and retrieves the stylesheet.
 *
 * This function creates a <style> element and appends it to the document's head
 * if the code is running on the client (not on the server) and the stylesheet has not yet been initialized.
 *
 * @returns The CSSStyleSheet if available, or `undefined` if not.
 */
export const getStylesheet = (): CSSStyleSheet | undefined => {
	if (initialized) {
		return styleSheet;
	}
	if (!isOnServer) {
		const styleEl: HTMLStyleElement = document.createElement('style');
		styleEl.setAttribute('data-testid', 'injectUniqueKeyframe');
		document.head.appendChild(styleEl);
		styleSheet = styleEl.sheet as CSSStyleSheet;
		initialized = true;
	}
	return styleSheet;
};

/**
 * Injects a unique CSS keyframe rule into the stylesheet.
 *
 * It escapes problematic characters from the provided name, inserts a new keyframe rule,
 * and then removes duplicate rules—keeping only the first occurrence of each.
 *
 * @param keyframe - The CSS keyframe definition.
 * @param name - The base name used to generate a unique animation name.
 * @returns An object containing the generated animation name and the current rules count.
 */
export const injectUniqueKeyframe = (
	keyframe: string,
	name: string,
): InjectResult => {
	const sheet = getStylesheet();
	if (!sheet) {
		return {animationName: '', rulesLength: 0};
	}

	// Remove problematic characters: (, ), comma, whitespace, #, %
	// eslint-disable-next-line no-useless-escape
	const escapedName = name.replace(/[\(\),\s#%]/g, '');
	const animationName = `animation-${escapedName}`;
	const keyframesRule = `@keyframes ${animationName} { ${keyframe} }`;

	// Insert the new rule at the end of the stylesheet.
	sheet.insertRule(keyframesRule, sheet.cssRules.length);

	// Deduplicate rules: keep the first occurrence of each unique rule.
	const uniqueRuleSet = new Set<string>();
	const uniqueIndexes: number[] = [];
	const totalRules = sheet.cssRules.length;

	for (let i = 0; i < totalRules; i++) {
		const ruleText = sheet.cssRules[i].cssText;
		if (!uniqueRuleSet.has(ruleText)) {
			uniqueRuleSet.add(ruleText);
			uniqueIndexes.push(i);
		}
	}

	// Remove duplicate rules by iterating in reverse order.
	for (let i = totalRules - 1; i >= 0; i--) {
		if (!uniqueIndexes.includes(i)) {
			sheet.deleteRule(i);
		}
	}

	return {animationName, rulesLength: sheet.cssRules.length};
};

/**
 * Resets the internal stylesheet reference and initialization flag.
 *
 * This function is intended for testing purposes only.
 */
export const __resetForTest = (): void => {
	styleSheet = undefined;
	initialized = false;
};
