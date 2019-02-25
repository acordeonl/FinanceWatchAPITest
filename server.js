// microsoft tick
// https://api.iextrading.com/1.0/stock/msft/price
// https://api.iextrading.com/1.0/stock/msft/news/last
// https://api.iextrading.com/1.0/stock/msft/logo

var fs = require('fs');
var util = require('util');
var http = require("https");

console.log = function (d) {
	fs.appendFileSync('debug.log', util.format(d) + '\n');
};

var http = require('http');
//create a server object:
http.createServer(function (req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	}); // http header
	var url = req.url;
	if (url === '/about') {


		var options = {
			"method": "GET",
			"hostname": [
					"api",
					"iextrading",
					"com"
			],
			"path": [
					"1.0",
					"stock",
					"msft",
					"logo"
			],
			"headers": {
					"cache-control": "no-cache",
					"Postman-Token": "f89e7c6f-87f3-42bc-9ca0-45ffd496d3b5"
			}
		};

		var req = http.request(options, function (res) {
			var chunks = [];

			res.on("data", function (chunk) {
					chunks.push(chunk);
			});

			res.on("end", function () {
					var body = Buffer.concat(chunks);
					console.log(body.toString());
			});
		});

		req.end();

		console.log( `aja ${new Date()}`);
		res.write('<h1>about us page<h1>'); //write a response
		res.end(); //end the response
	} else if (url === '/contact') {
		res.write('<h1>contact us page<h1>'); //write a response
		res.end(); //end the response
	} else {
		res.write('<h1>Hello World!<h1>'); //write a response
		res.end(); //end the response
	}
}).listen(3000, function () {
	// console.log("server start at port 3000", new Date()); //the server object listens on port 3000
});