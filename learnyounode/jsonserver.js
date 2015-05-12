var http = require('http');
var url = require('url');

var port = Number(process.argv[2]);

String.prototype.startsWith = function (searchString, position) {
	position = position || 0;
	return this.lastIndexOf(searchString, position) === position;
};

var server = http.createServer(function (request, response) {
	if (request.method != 'GET')
		return response.end('give me a GET!');

	response.writeHead(200, {'Content-Type': 'application/json'});

	if (request.url.startsWith('/api/parsetime')) {
		// response.write data for parsetime
		var dateString = url.parse(request.url, true).query.iso;
		var date = new Date(dateString);

		console.log(date);

		var time = {
			"hour": date.getHours(),
			"minute": date.getMinutes(),
			"second": date.getSeconds()
		};

		var jsonText = JSON.stringify(time);

		response.write(jsonText);

	} else if (request.url.startsWith('/api/unixtime')) {
		// response.write data for unixtime
		
		var unixtime = (new Date).getTime();

		var epoch = {
			"unixtime": unixtime
		};

		var jsonText = JSON.stringify(epoch);

		response.write(jsonText);
	}

	response.end();

}).listen(port); 
