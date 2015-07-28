var http = require('http');
var express = require('express');
var app = express();
var request = require('request');

var server = http.createServer(function(req, res){
	
	// console.log('DATA');
	// console.log(arguments);
	onRequest(req, res);
});

var Exception = function(err){
	console.log('ERROR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
	console.log(err);
}

server.listen('1111', function(){
	// console.log(server);
	console.log('LISTENING...');
});

function onRequest(req, res){
	console.log('beginning request..');
	createEnvelope(req, function(err, data){
		if(err){
			Exception(err);
		}
		else{
		console.log('back inside onRequest...');
		console.log(data);
		data.headers['X-User-Agent'] = 'proxyit';
		// console.log(data.headers);
		res.writeHead(data.statusCode, data.headers);
		res.write(data.body);
		res.end('okay');
		}
	});
}

function createEnvelope(req, cb){
	var options = {
		url: 'http://www.google.com'+ req.url,
		method: req.method,
		headers: {
			'User-Agent': 'proxyit'
		}
	};
	request(options, function(err, data){
		cb(err, data);
	});
}