var ls = require('./module.js');
var files = [];

var path = process.argv[2];
var extension = process.argv[3];

ls.wc(ls.logMyCount)
