const preprocess = require('svelte-preprocess');
const adapter = require('@sveltejs/adapter-vercel');

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
		adapter: adapter(),
		files: {
			assets: 'static',
			routes: 'src/routes',
			template: 'src/app.html'
		}
	}
};
