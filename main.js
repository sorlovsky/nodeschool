var mymodule = require('./module.js')
var path = process.argv[2];
var extension = process.argv[3];


function log(files){
	for (var i=0; i<files.length; i++){
		console.log(files[i]);
	}
}

mymodule(path, extension, log)
