/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import {defineConfig, type LibraryOptions} from 'vite';
import dts from 'vite-plugin-dts';

import {resolve} from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({
			rollupTypes: true,
			exclude: ['node_modules/'],
		}),
	],
	build: {
		sourcemap: false,
		outDir: 'lib',
		lib: {
			entry: resolve(__dirname, 'index.ts'),
			name: 'ReactBeaconHint',
			cssFileName: 'styles',
			fileName: (
				format: Required<Exclude<LibraryOptions['fileName'], string>>,
			) => `react-beacon-hint.${format}.js`,
		},
		rollupOptions: {
			external: [
				'react',
				'react/jsx-runtime',
				'react-dom',
				'react-dom/server',
				'@floating-ui/react',
			],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'react-dom/server': 'ReactDOMServer',
					'react/jsx-runtime': 'react/jsx-runtime',
					'@floating-ui/react': 'FloatingUIReactDOM',
				},
			},
		},
	},
	test: {
		globals: true,
		setupFiles: './src/test/setup.ts',
		environment: 'jsdom',
		coverage: {
			enabled: true,
			all: true,
			include: ['src/**/*.{ts,tsx}'],
		},
	},
});
