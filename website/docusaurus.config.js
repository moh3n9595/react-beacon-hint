/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/palenight');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'React Beacon Hint',
	tagline: 'User Onboarding Component for React with Fully Configurable Options',
	favicon: '/img/favicon.ico',

	// Set the production url of your site here
	url: 'https://react-beacon-hint-doc.vercel.app',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					routeBasePath: '/',
					remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}]],
				},
				blog: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
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
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
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
		}),
};

module.exports = config;
