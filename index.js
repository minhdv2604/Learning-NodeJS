var expres = require('express');
var app = expres();

app.listen(2000);


// Quá trình xử lý đồng bộ thì express sẽ tự bắt lỗi
app.get('/', function (req, res) {
    throw new Error('BROKEN') 
});

// Quá trình xử lý bất đồng bộ, ta sẽ chuyển lỗi đến middleware error handler để xử lý
app.get('/', function (req, res, next) {
    fs.readFile('/file-does-not-exist', function (err, data) {
        // nếu đọc file mà có lỗi
        if (err) {
            // chuyển lỗi đó đến middleware error handler để xử lý
            next(err) 
        } else {
            res.send(data)
        }
    })
})


// Sử dụng try catch để bắt lỗi quá trình xử lý bất đồng bộ và chuyển lỗi sang middleware error handler để xử lý
app.get('/', function (req, res, next) {
    setTimeout(function () {
        try {
            throw new Error('BROKEN')
        } catch (err) {
            next(err)
        }
    }, 100)
})


// middleware error handler phải được đặt ở sau cùng, dưới tất cả các app.use() khác và các route
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
