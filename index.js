var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static('public'));
// app.set('view engine', 'ejs');

server.listen(2010);

var users = ['AAA'];

io.on('connection', function(socket){
   socket.on('client send username', function (data) {
      if (users.indexOf(data) >= 0)
      {
         socket.emit('server send register fail');
      } else {
         users.push(data);
         socket.Username = data;
         console.log('users: ',users);
         socket.emit('server send register succses', data);
         io.emit('list users login', users);
      }
   });
   
   socket.on('logout', function () {
      let location = users.indexOf(socket.Username);
      users.splice(location, 1);
      console.log('users->',users);
      socket.broadcast.emit('list users login', users);
   });

   socket.on('client send message', function (data) {
      console.log(data)
      io.emit('server send message to all', {username: socket.Username, content: data});
   });
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html')
});

// app.get('/', function (req, res) {
//    res.render('index');
// });