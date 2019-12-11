var express = require('express');
var app = express();
app.use(express.static('public'));
var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen('8000');

io.on('connection', function (socket) {
    socket.on('client-send-color', function (data) {
        io.emit('server-send-color', data);
    });
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html')
});