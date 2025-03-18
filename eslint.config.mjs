import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
	{files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
	{languageOptions: {globals: globals.browser, ecmaVersion: '2020'}},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	importPlugin.flatConfigs.recommended,
	{
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'unused-imports': unusedImports,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': [
				'warn',
				{allowConstantExport: true},
			],
			'react/react-in-jsx-scope': 'off',
			'import/no-unresolved': 'off',
			'import/order': [
				'error',
				{
					groups: [
						'external',
						'unknown',
						'index',
						'sibling',
						'parent',
						'builtin',
						'object',
						'type',
						'internal',
					],
					pathGroups: [
						{
							pattern: '@(react|react-native)',
							group: 'external',
							position: 'before',
						},
					],
					pathGroupsExcludedImportTypes: ['react'],
					'newlines-between': 'always',
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
					warnOnUnassignedImports: true,
				},
			],
			'@typescript-eslint/no-unused-vars': 'off',
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],
		},
		settings: {
			'import/resolver': {
				node: {
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
					paths: ['src', 'eslint.config.mjs'],
				},
			},
			react: {
				version: 'detect',
			},
		},
	},
	{
		ignores: [
			'node_modules',
			'.yarn',
			'commitlint.config.js',
			'stylelint.config.cjs',
			'lib',
			'website/.docusaurus',
			'website/build',
			'example/dist',
			'coverage',
			'**/typedoc-sidebar.cjs',
		],
	},
	eslintConfigPrettier,
	eslintPluginPrettierRecommended,
];
