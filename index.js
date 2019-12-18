var expres = require('express');
var app = expres();
var request = require('request');
var fs = require('fs');

app.use(expres.static('public'));
app.set('view engine', 'ejs');
app.listen(2020);


// gửi request get đến site https://www.ominext.com/
request
    .get('https://www.ominext.com/', function (err, response, body) {
        if (err) console.log('error:', err); // In ra lỗi
    })
    .pipe(fs.createWriteStream('index.html')); // Tạo ra file index.html lưu content của body


// Khai báo biến options
const options = {
    url: 'https://reqres.in/api/users',
    json: true,
    body: {
        name: 'Atta',
        job: 'Software Engineer'
    }
};
// Gửi request post đến site https://reqres.in/api/users
request.post(options, (err, res, body) => {
    if (err) {
        // In ra lỗi
        return console.log(err); 
    }
    // In ra nội dung body
    console.log(body);
});

