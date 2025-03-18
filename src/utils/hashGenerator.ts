/**
 * Generates a hash string for the given text.
 * @param {string} text - The input string to hash.
 * @returns {string} A hash string representing the input.
 */
export const generateHash = (text: string) =>
	text
		.split('')
		.reduce((s, c) => (Math.imul(31, s) + c.charCodeAt(0)) | 0, 0)
		.toString();
