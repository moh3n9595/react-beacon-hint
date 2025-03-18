import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

import {resolve} from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{
				find: /^react-beacon-hint\/styles\.css$/,
				replacement: resolve(__dirname, '../lib/styles.css'),
			},
			{
				find: /^react-beacon-hint$/,
				replacement: resolve(__dirname, '../index.ts'),
			},
		],
	},
});
