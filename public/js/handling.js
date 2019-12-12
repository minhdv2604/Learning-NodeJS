var socket = io();

$(document).ready(function () {
   $('#login').show();
   $('#chat').hide();
   
   $('#btnRegister').click(function () {
       socket.emit('client send username', $('#username').val())
   });
    
    socket.on('server send register fail', function () {
        alert('Sai username (username đã được đăng ký)');
    });
    
    socket.on('server send register succses', function (data) {
        $('#currentUser').text(data);
        $('#login').hide(1000);
        $('#chat').show(2000);
    });

    socket.on('list users login', function (data) {
        $('#boxContent').html('');
        data.forEach(function (e) {
            $('#boxContent').append('<div class="uerOnline">' + e + '</div>');
        })
    });

    $('#btnLogout').click(function () {
        socket.emit('logout');
        $('#login').show(2000);
        $('#chat').hide(1000);
    });

    $('#btnSend').click(function () {
        socket.emit('client send message', $('#message').val());
    });
    
    socket.on('server send message to all', function (data) {
        $('#listMessages').append('<div class="contentMessage">' + data.username + ': ' + data.content + '<div>');
    });
});