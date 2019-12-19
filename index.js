var expres = require('express');
var app = expres();

app.use(expres.static('public'));

app.listen(2000);



// Tương tự như middleware trên, sau khi thực hiện xong chức năng ở function đầu tiên
// Nó sẽ chạy hàm next() và chuyển đến thực hiện chức năng ở function tiếp theo.
app.use('/user/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
  }, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
});


// Sử dụng hàm next('route') để bỏ qua các middleware cần thực hiện
// Ví dụ, khi có request /user/:id thì nó sẽ thực hiện function
app.get('/book/:id', function first(req, res, next) {
    // Nếu tham số id = 0 thì sẽ thực hiện hàm next('router') bỏ qua function second() và chạy function last()
    if (req.params.id === '0') next('route')
    // Ngược lại nếu id khác 0 thì sẽ chạy đến function second
    else next();
  }, function second(req, res, next) {
    // in ra text second
    res.send('second');
});
// hàm này chỉ được thực hiện khi id = 0
app.get('/book/:id', function last(req, res, next) {
    res.send('last');
});


// Ví dụng về middleware error-handling
app.get('/users/:id', function(req, res, next){
    // Nếu id = 0
    if (req.params.id == 0) {
        // khai báo object error với các thông tin lỗi
        let error = {
            title: "Không tìm thấy ID",
            httpStatusCode: 400
        }
        // Chuyển object error đến middleware xử lý lỗi để xử lý
        return next(error);
    }
    // Nếu id khác 0 thì in ID ra màn hình
    res.end('ID: ' + req.params.id);
});
// Đây là middleware xử lý lỗi, sẽ tiếp nhận object error và trả kết quả cho client
app.use(function(err, req, res, next){
    // Trả về status:400 và in text ra màn hình là Không tìm thấy ID
    res.status(err.httpStatusCode).send(err.title);
});



var users = [
    { id: 0, name: 'tj', email: 'tj@vision-media.ca', role: 'member' }, 
    { id: 1, name: 'ciaran', email: 'ciaranj@gmail.com', role: 'member' }, 
    { id: 2, name: 'aaron', email: 'aaron.heckmann+github@gmail.com', role: 'admin' }
];

// Lấy thông tin của user
function loadUser(req, res, next) {
    // nếu params id truyền lên mà không có trong mảng user thì thông báo lỗi
    if (users[req.params.id] == undefined) {
        next('User có id = ' + req.params.id + ' không tồn tại')
    } else {
        let user = users[req.params.id];
        req.user = user;
        next();
    }
}

// Check quyền của user
function permission(req, res, next) {
    // Nếu params id truyền lên = id của user có role là admin thì pass qua
    if (req.authenticatedUser.id === req.user.id) {
        next();
    } else {
        next('Chỉ admin mới có quyền')
    }
}

// Mặc định users[2] là được xác thực
app.use(function(req, res, next) {
    req.authenticatedUser = users[2];
    next();
});

// Chuyển hướng đến user đầu tiên có id = 0
app.get('/', function(req, res) {
    res.redirect('/user/0');
});

// Check id truyền lên thông qua hàm loadUser để xử lý
app.get('/user/:id', loadUser, function(req, res) {
    res.send('Viewing user ' + req.user.name);
});

// Check id truyền lên thông qua hàm loadUser và check quyền trong hàm permission để xử lý
app.get('/user/:id/edit', loadUser, permission, function(req, res) {
    res.send('Editing user ' + req.user.name);
});

// Check id truyền lên thông qua hàm loadUser và check quyền trong hàm permission để xử lý
app.delete('/user/:id', loadUser, permission, function(req, res) {
    res.send('Deleted user ' + req.user.name);
});