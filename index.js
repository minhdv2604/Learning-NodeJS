var expres = require('express');
var app = expres();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(expres.static('public'));
app.set('view engine', 'ejs');

server.listen(2000);

io.on('connection', function (socket) {
    //
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html')
});

// app.get('/', function (req, res) {
//    res.render('index');
// });