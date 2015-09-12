var chat = require('simplechat');

var http = require('http');

var server = http.createServer(function(request, response){

}).listen(3214);

var io = require('socket.io').listen(server);

io.on("connection", function(socket){

	console.log("connect");

	socket.on("disconnect", function(){
		console.log("disconnect");
	});

	socket.emit("newMessage", "TEST MESSAGE");
});