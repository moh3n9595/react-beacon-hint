import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [{find: 'react-beacon-hint', replacement: path.resolve(__dirname, '..')}],
	},
});
