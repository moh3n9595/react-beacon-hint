/* eslint-disable @typescript-eslint/no-require-imports */
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	// tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

	// But you can create a sidebar manually
	tutorialSidebar: [
		{
			type: 'category',
			label: 'Getting Started',
			link: {
				type: 'generated-index',
				slug: '/',
				title: 'Docs',
				description:
					'User Onboarding Component for React with Fully Configurable Options',
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
			items: [
				'getting-started/installation',
				'getting-started/playground',
				'getting-started/usage',
			],
		},
		{
			type: 'category',
			label: 'API (Auto-generated)',
			link: {
				type: 'generated-index',
				title: 'API',
				description:
					'API References Generated by TypeDoc Comments Automatically',
				keywords: ['typedoc', 'api', 'comments', 'doc', 'automatically'],
			},
			collapsed: true,
			items: require('./docs/api/typedoc-sidebar.cjs'),
		},
	],
};

export default sidebars;
