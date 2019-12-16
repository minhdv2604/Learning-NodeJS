var expres = require('express');
var app = expres();
var fs = require("fs");

app.use(expres.static('public'));
app.set('view engine', 'ejs');

app.listen(2040);

// Get list users
app.get('/listUsers', function (req, res) { 
    // Đọc dữ liệu từ file /public/users.json
    fs.readFile( __dirname + "/public/" + "users.json", 'utf8', function (err, data) { 
        // in dữ liệu ra màn hình
        res.end( data ); 
    }); 
});
 
// Get detail user
app.get('/:id', function (req, res) { 
    // Đọc dữ liệu từ file /public/users.json
    fs.readFile( __dirname + "/public/" + "users.json", 'utf8', function (err, data) { 
        // convert data từ json sang object
        users = JSON.parse( data ); 
        // Lấy data chi tiết của user trong mảng users với id chính là tham số id truyền vào
        let userDetail = users["user" + req.params.id];
        // chuyển về data dạng json rồi in ra màn hình
        res.end( JSON.stringify(userDetail)); 
    }); 
}); 
        