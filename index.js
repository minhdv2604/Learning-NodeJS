var express = require('express');
var app = express();
app.use(express.static('public'));
var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen('8000');

// bắt sự kiện kết nối từ client
io.on('connection', function (socket) {
    // lắng nghe sự kiện client-send-color gửi lên từ client
    socket.on('client-send-color', function (data) {
        // truyền data cho tất cả các client đang kết nối
        io.emit('server-send-color', data);
    });
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html')
});