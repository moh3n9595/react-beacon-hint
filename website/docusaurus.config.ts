/* eslint-disable @typescript-eslint/no-require-imports */
import {themes as prismThemes} from 'prism-react-renderer';

import type * as Preset from '@docusaurus/preset-classic';
import type {Config} from '@docusaurus/types';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: 'React Beacon Hint',
	tagline:
		'User Onboarding Component for React with Fully Configurable Options',
	favicon: '/img/favicon.ico',

	// Set the production url of your site here
	url: 'https://react-beacon-hint-doc.vercel.app',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'facebook', // Usually your GitHub org/user name.
	projectName: 'docusaurus', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					routeBasePath: '/',
					remarkPlugins: [
						[
							require('@docusaurus/remark-plugin-npm2yarn'),
							{sync: true, converters: ['yarn', 'pnpm']},
						],
					],
				},
				blog: false,
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: 'img/social-card.png',
		navbar: {
			title: 'React Beacon Hint',
			logo: {
				alt: 'Logo',
				src: 'img/logo.svg',
			},
			items: [
				{
					href: 'https://www.npmjs.com/package/react-beacon-hint',
					position: 'right',
					className: 'header-npm-link',
					'aria-label': 'NPM repository',
				},
				{
					href: 'https://github.com/moh3n9595/react-beacon-hint',
					position: 'right',
					className: 'header-github-link',
					'aria-label': 'GitHub repository',
				},
			],
		},
		footer: {
			style: 'light',
			copyright: `Made with ❤️ by Docusaurus`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
		algolia: {
			// The application ID provided by Algolia
			appId: 'O3HFZ47GXK',

			// Public API key: it is safe to commit it
			apiKey: 'bdb2f122dcceec6422fc5ead9b1d1b3f',

			indexName: 'react-beacon-hint-vercel',

			// Optional: see doc section below
			contextualSearch: true,

			// Optional: path for search page that enabled by default (`false` to disable it)
			searchPagePath: 'search',
		},
		metadata: [{name: 'keywords', content: 'react, hint, beacon, floating-ui'}],
	} satisfies Preset.ThemeConfig,

	plugins: [
		[
			'docusaurus-plugin-typedoc',
			{
				entryPoints: [
					'../src/floating/index.tsx',
					'../src/beacon/index.ts',
					'../src/popover/index.tsx',
					'../src/hint/index.tsx',
				],
				exclude: '**/{utils|test|constants|hooks}/*.ts',
				tsconfig: '../tsconfig.json',
				disableSources: true,
				readme: 'none',
				sourceLinkTemplate:
					'https://github.com/moh3n9595/react-beacon-hint/blob/{gitRevision}/{path}#L{line}',
				excludeInternal: true,
				excludePrivate: true,
				excludeProtected: true,
				excludeNotDocumented: false,
				pageTitleTemplates: {
					index: (args) => `${args.projectName}: ${args.version}`,
					module: (args) => args.name,
					member: (args) => `${args.name}`,
				},
			},
		],
	],
};

export default config;
