var express = require('express');
var app = express();

app.listen(2000);

// connect mysql
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'express'
});

// use template engine pug
app.set('view engine', 'pug');

// use Built-in middleware
app.use(express.static(__dirname + '/public'));


// Hiển thị danh sách các profiles 
app.get('/', function(req, res) {
    // lấy tât cả các profiles trong bảng profiles
    connection.query("SELECT * FROM profiles", function(err, results) {
        if (err) throw err;
        // render ra file index.pug
        res.render('index', {
            title: 'Home page',
            people: results
        });
    });
});


// Hiển thị chi tiết profiles
app.get('/profile/:id', function (req, res) {
    let params = req.params.id;
    // lấy thông tin profiles trong bảng profiles có id = params id trên url
    connection.query("SELECT * FROM profiles WHERE id =" + params, function(err, results) {
        if (err) throw err;
        person = results[0];
        // render ra file profile.pug
        res.render('profile', {
            title: `About ${person.firstname} ${person.lastname}`,
            person
        });
    });
});


// Hiển thị danh sách profiles theo giới tính nhập trên url
app.get('/gender/:gender', function (req, res) {
    let gender = req.params.gender;
    // lấy tất cả profiles trong bảng profiles có gender = params gender trên url
    connection.query("SELECT * FROM profiles WHERE gender = '" + gender + "'", function(err, results) {
        if (err) throw err;
        people = results;
        // render ra file gender.pug
        res.render('gender', {
            title: `List gender ${gender}`,
            people
        });
    });
});


