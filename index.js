var expres = require('express');
var app = expres();

app.use(expres.static('public'));

app.listen(2000);

// Đây là middleware cấp ứng dụng
// khi có request /user/:id thì nó sẽ thực hiện function và trả về text là "USER"
app.get('/user/:id', function (req, res, next) {
    res.send('USER');
});


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