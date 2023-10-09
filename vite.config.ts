import react from '@vitejs/plugin-react';
import path from 'path';
import {LibraryOptions} from 'vite';
import {defineConfig} from 'vitest/config';
import dts from 'vite-plugin-dts';

import * as packageJson from './package.json';

export default defineConfig({
	define: {
		'process.env': {},
	},
	plugins: [
		react({
			jsxRuntime: 'classic',
		}),
		dts({
			insertTypesEntry: true,
			exclude: ['node_modules/', 'example/', 'website/'],
		}),
	],
	build: {
		sourcemap: false,
		outDir: 'lib',
		lib: {
			entry: path.resolve(__dirname, 'index.tsx'),
			name: 'ReactBeaconHint',
			formats: ['es', 'umd'],
			fileName: (format: Required<Exclude<LibraryOptions['fileName'], string>>) => `react-beacon-hint.${format}.js`,
		},
		rollupOptions: {
			external: [...Object.keys(packageJson.peerDependencies), 'react-dom/server', 'lib'],
			output: {
				assetFileNames(chunkInfo) {
					if (!chunkInfo.name) return '';
					if (chunkInfo.name === 'style.css') return 'styles.min.css';
					return chunkInfo.name;
				},
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'react-dom/server': 'ReactDOMServer',
					'styled-components': 'styled',
					'@floating-ui/react': 'FloatingUIReactDOM',
					'framer-motion': 'Motion',
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
			exclude: ['example', 'lib', 'website', '**/*.d.ts', '**/*{.,-}test.{tsx,ts}', 'src/test', 'src/@types'],
			extension: ['.ts', '.tsx'],
		},
	},
});
