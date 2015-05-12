var through = require('through2');
var fs = require('fs');

fs.createReadStream(process.stdin)
	.pipe(through2(function (chunk, callback) {
		this.push(chunk.setEncoding('utf8').toUpperCase());
		callback();
	}))
	.pipe(fs.createWriteStream(process.stdout));

