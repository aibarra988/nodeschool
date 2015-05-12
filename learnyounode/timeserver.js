var net = require('net'),
	strftime = require('strftime'),
    port = process.argv[2];

var server = net.createServer(function (connection) {
	console.log('client connected');

	connection.on('end', function() {
		console.log('cliend disconnected');
		connection.write('goodbye!');
	});
	
	connection.write(strftime('%F %R\n', new Date()));
	connection.end();
});

server.listen(port, function() {
	console.log('server started');
});






/************************ OFFICIAL SOLUTION *****************************/

	// var net = require('net')

 //    function zeroFill(i) {
 //      return (i < 10 ? '0' : '') + i
 //    }

 //    function now () {
 //      var d = new Date()
 //      return d.getFullYear() + '-'
 //        + zeroFill(d.getMonth() + 1) + '-'
 //        + zeroFill(d.getDate()) + ' '
 //        + zeroFill(d.getHours()) + ':'
 //        + zeroFill(d.getMinutes())
 //    }

 //    var server = net.createServer(function (socket) {
 //      socket.end(now() + '\n')
 //    })

 //    server.listen(Number(process.argv[2]))

