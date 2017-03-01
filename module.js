var fs = require('fs');
var files = [];

var path = process.argv[2];
var extension = process.argv[3];

module.exports = function wc(callback){
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
}

