/*var http = require('http');
  http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World\n');
  }).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');
*/

//Hell world

/*
var myModule = require("./hello.js");

console.log("Hello: ",  myModule.hello());

*/
/*
var http = require('http');
var fs = require('fs');
console.log("Starting...");

var config  = JSON.parse(fs.readFileSync('config.json'));

var host = config.host;
var port = config.port



var server = http.createServer(function(request,response){
	console.log("Received request from: " + request.url);
	fs.readFile("./" + request.url,function(err,data){
		if(err){
			response.writeHead(404,{"Content-type":"text/plain"});
			response.end("Sorry the page was not found")
		}else{
			response.writeHead(200,{"Content-type":"text/plain"});
			response.write(data);
			response.end();
		}
	});
});

server.listen(port,host,function(){
	console.log("Listening : " + host + " : " + port );
});

fs.watchFile('config.json',function(){
	config  = JSON.parse(fs.readFileSync('config.json'));
	host = config.host;
	port = config.port
	server.close();
	server.listen(port,host,function(){
	console.log("Now Listening : " + host + " : " + port );
});
});

*/

/*

var fs = require('fs');
var config = JSON.parse(fs.readFileSync('config.json'));
var host = config.host;
var port = config.port;
var express = require('express');

var app = express();

app.get('/',function(request,response){

	response.send("hello!");

});


app.listen(port,host);

*/
/*
var fs = require('fs');
console.log("startimg..");
fs.writeFile('./write_sync.txt','hello world',function(error){
	console.log("written file");

});

*/

/*
var fs = require('fs');
console.log("started..");
var config = JSON.parse(fs.readFileSync('./config.json'));
console.log("Initial config", config);

fs.watchFile('./config.json',function(cur,prev){
	console.log("config change");
	config = JSON.parse(fs.readFileSync('./config.json'));
	console.log("Now config is :", config);
});

*/
/*
var fs = require('fs');
var mongo = require("mongodb");
var config = JSON.parse(fs.readFileSync('./config.json'));
var host = config.host;
var port = mongo.Connection.DEFAULT_PORT;
var db = new mongo.Db("
", new mongo.Server(host,port,{}));
db.open(function(error){
	if(error){
		
		console.log(error);
	
	}else{
	console.log("we are connected " + host + " : " + port );
	
	db.collection("user",function(error,collection){
	if(error){
		
		console.log(error);
	
	}else{
		
		console.log("we have the collection");
		
		collection.insert({
			name:"jarvis"
		},function(){
		
			console.log("successfully Added");	
		
		});
	}	
	});
	}
});

*/

var speech = require('google-speech-api');

speech('/path/to/audio/file', function (err, results) {
  console.log(results);
  // [{status: 0, id: '...', hypotheses: [{utterance: 'this is a test', confidence: 0.9162679}]}]}]
});

