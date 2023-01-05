export const generateHash = (str: string) =>
	str
		.split('')
		.reduce((s, c) => (Math.imul(31, s) + c.charCodeAt(0)) | 0, 0)
		.toString();
