import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx()],

	base: './',
	resolve: {
		alias: {
			'@': resolve('./src'),
			'@shared': resolve('./src/components/[shared]'),
		},
		extensions: ['.js', '.tsx', '.vue', '.json', '.ts'],
	},
	esbuild: {
		jsxFactory: 'h',
		jsxFragment: 'Fragment',
		jsxInject: "import { h } from 'vue';",
	},
	server: {
		open: true,
		host: true,
		port: 3008,
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "@/styles/mixins.scss";@import "@/styles/index.scss";',
			},
		},
	},
});
