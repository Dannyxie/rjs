require(['mod1'],function(mod1){
	console.log(mod1.obj)
	require(['dist/mod3'],function(mod3){})
})