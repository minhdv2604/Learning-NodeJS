var expres = require('express');
var app = expres();

// import file userRouter để sử dụng các router trong đó
var userRouters = require('./userRouters');

// Khi gọi đến url /user thì nó sẽ chạy qua các route trong file userRouter
app.use('/user', userRouters);

app.listen(2000);

// Methods get
app.get('/', function (req, res) {
    res.send("Hello World!");
});

// Methods post
app.post('/', function (req, res){
    res.send('POST methods');
});

// Các route trên có thể được viết ngắn gọn như sau:
app.route('/')
    .get(function (req, res) {
        res.send("Hello World!");
    })
    .post(function (req, res) {
        res.send('POST methods');
    });

// Route parameters + route paths
// 
// route sẽ chỉ nhận khi tham số id truyền vào là dạng số từ có từ 1 đến 4 kí tự
// ví dụ /book/1234 ->true, /book/123456 -> false 
app.get('/book/:id([0-9]{1,4})', function(req, res) {  
    var id = req.params.id 
    res.send('The id is ' + id); 
});

// Route handlers
// 
// Ví dụ khi client request url /users/123
// Đầu tiên sẽ chạy đến function isLogged để kiểm tra đã login chưa
// Nếu đã login thì chạy hàm next() chuyển đến hàm tiếp theo là renderProfilePage
// Nếu chưa login thì trả về status 403 và chuyển đến trang /login
function isLogged(req, res, next) {
    if( login == true ) {
      return next();
    }
  
    return res.status(403).redirect('/login');
  }
  
  function renderProfilePage(req, res, next) {
    // ...
  }
  
  app.get('/users/:user', [isLogged, renderProfilePage]);

