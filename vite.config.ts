import react from '@vitejs/plugin-react';
import path from 'path';
import {LibraryOptions} from 'vite';
import {defineConfig} from 'vitest/config';
import dts from 'vite-plugin-dts';

import * as packageJson from './package.json';

export default defineConfig({
	plugins: [
		react({
			jsxRuntime: 'classic',
		}),
		dts({
			insertTypesEntry: true,
			exclude: ['node_modules/', 'example/'],
		}),
	],
	build: {
		sourcemap: false,
		outDir: 'lib',
		lib: {
			entry: path.resolve(__dirname, 'index.tsx'),
			name: 'ReactBeaconHint',
			formats: ['es', 'umd', 'cjs'],
			fileName: (format: Required<Exclude<LibraryOptions['fileName'], string>>) => `react-beacon-hint.${format}.js`,
		},
		rollupOptions: {
			external: [...Object.keys(packageJson.peerDependencies), 'lib'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDom',
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
			exclude: ['example', 'lib', '**/*.d.ts', '**/*{.,-}test.{tsx,ts}', 'src/test', 'src/@types'],
			extension: ['.ts', '.tsx'],
		},
	},
});
