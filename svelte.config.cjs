const preprocess = require('svelte-preprocess');
const vercel = require('@sveltejs/adapter-vercel');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		files: {
			assets: 'static',
			routes: 'src/routes',
			template: 'src/app.html'
		},
		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		},
		adapter: vercel()
	}
};
