var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('../..')(server);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.emit('some event', { for: 'everyone' });

io.on('connection', function(socket){
  /*console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });*/
    socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});