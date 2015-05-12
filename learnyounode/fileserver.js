var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var filepath = process.argv[3];

var server = http.createServer(function (request, response) {
	var fileReadStream = fs.createReadStream(filepath);

	fileReadStream.on('open', function() {
		fileReadStream.pipe(response);
	});

	fileReadStream.on('error', function(err) {
		response.end(err);
	});

}).listen(port);


/************************** OFFICIAL SOLUTION ******************************/

    // var http = require('http')
    // var fs = require('fs')

    // var server = http.createServer(function (req, res) {
    //   res.writeHead(200, { 'content-type': 'text/plain' })

    //   fs.createReadStream(process.argv[3]).pipe(res)
    // })

    // server.listen(Number(process.argv[2]))