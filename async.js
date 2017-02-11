var fs = require('fs');
var count = undefined;

function wc(callback){
	var str = fs.readFile(process.argv[2], function doneReading(err, fileContents) {
		str = fileContents.toString();
		count  = str.split('\n').length - 1;
		callback()
	});
}

function logMyCount(){
	console.log(count);
}

wc(logMyCount);
