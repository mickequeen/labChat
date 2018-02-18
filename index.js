var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('../..')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


var numUsers = 0;

io.on('connection', function (socket) {
  var addedUser = false;
  // For DEMO compatibility
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

io.on('connection', function(status) {
  socket.on('user joined', function(join){
    io.emit('user joined' , join);
  })
})


