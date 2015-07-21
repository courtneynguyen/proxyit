var http = require('http');

var server = http.createServer(function(req, res){
	
	console.log('DATA');
	console.log(arguments);
});

server.listen('1111', function(){
	console.log('REQUEST');
});
