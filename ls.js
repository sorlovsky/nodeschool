var fs = require('fs');
var files = [];

var path = process.argv[2];
var extension = process.argv[3];

function wc(callback){
	var str = fs.readdir(path, function doneReading(err, list) {
		var re = /(?:\.([^.]+))?$/;
		for (var i=0; i<list.length; i++){
			if (re.exec(list[i])[1] == extension){
				files.push(list[i])
			}
		}	
		callback();
	});
}

function logMyCount(){
	for (var i=0; i<files.length; i++){
		console.log(files[i]);
	}
}

wc(logMyCount);
