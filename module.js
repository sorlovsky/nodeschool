var fs = require('fs');
var files = [];

module.exports = function wc(path, extension, callback){
		var fs = require('fs');
		var files = [];
		var str = fs.readdir(path, function doneReading(err, list) {
			if (err){
					return callback(err)
			}
			var re = /(?:\.([^.]+))?$/;
			for (var i=0; i<list.length; i++){
				if (re.exec(list[i])[1] == extension){
					files.push(list[i])
				}
			}	
			return callback(files);
		});
	}

function log(files){
	for (var i=0; i<files.length; i++){
		console.log(files[i]);
	}
}
/*module.exports = function print(){*/
		//console.log("hello world");
/*}*/
