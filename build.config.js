({
	baseUrl: "./src",
	paths: {
		requireLib: '../node_modules/requirejs/require'
	},
	optimize: "none",
	name: "main",
	include : ['requireLib'],
	// dir : './dist/'
	generateSourceMaps : true,
	out: 'dist/bundle.js'
})