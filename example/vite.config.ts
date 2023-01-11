import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import {prismjsPlugin} from 'vite-plugin-prismjs';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		prismjsPlugin({
			languages: ['javascript'],
		}),
	],
	resolve: {
		alias: [{find: 'react-beacon-hint', replacement: path.resolve(__dirname, '..')}],
	},
});
