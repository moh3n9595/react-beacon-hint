module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'eslint-config-react-app',
		'plugin:react/jsx-runtime',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react', '@typescript-eslint', 'prettier', 'unused-imports'],
	overrides: [
		{
			files: '*.spec.js',
			rules: {
				'no-unused-expressions': 'off',
			},
		},
	],
	rules: {
		'prettier/prettier': ['error'],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_'},
		],
		'sort-imports': ['error', {ignoreCase: true, ignoreDeclarationSort: true}],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
