/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	tutorialSidebar: [
		{
			type: 'category',
			label: 'Getting Started',
			link: {
				type: 'generated-index',
				slug: '/',
				title: 'Docs',
				description: 'User Onboarding Component for React with Fully Configurable Options',
				keywords: [
					'js',
					'hint',
					'beacon',
					'react',
					'guide',
					'popover',
					'popper',
					'floating-ui',
					'reactjs',
					'component',
					'onboarding',
					'tour',
				],
			},
			collapsed: false,
			items: ['getting-started/installation', 'getting-started/usage'],
		},
	],
};

module.exports = sidebars;
