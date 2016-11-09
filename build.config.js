({
	baseUrl: "./src",
	paths: {
		requireLib: '../node_modules/requirejs/require'
	},
	optimize: "none",
	// include: ['requireLib'],

	modules: [{
		name: 'main',
		include : ['requireLib']
	}, {
		name: 'main2'
	}],
	namespace: 'deryck',
	generateSourceMaps: true,
	// out: 'dist/bundle.js'
	dir: './dist/'
})