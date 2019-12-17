var expres = require('express');
var app = expres();

// import body-parser
// Sử dụng body parser như một middleware
// body parser lắng nghe và nhận dữ liệu từ các params truyền lên và trả về dữ liệu trong req.body
var bodyParser = require('body-parser')
// định dạng dữ liệu post lên server
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.listen(2000);

// Methods get
// gửi request lên server url /tintuc/93
app.get('/news/:id', function (req, res) {
    // Trả về kết quả: Tin tức có id: 93
    res.send('Tin tức có id: '+ req.params.id);
});


// Methods post
// gửi request lên server url /user
// trong body truyền lên 2 params username = Minh Dương và password = 123456
app.post('/user', urlencodedParser, function (req, res) {
    // Khai báo biến username = username trả về trong body 
    let username = req.body.username;
    // Khai báo biến pass = password trả về trong body 
    let pass = req.body.password;
    // Kết quả in ra Username: Minh Dương / Password: 123456
    res.send('Username: ' + username + ' / ' + 'Password: ' + pass);
})