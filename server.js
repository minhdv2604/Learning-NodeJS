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

// use route method get
app.get('/', function(req, res) {
    connection.query("SELECT * FROM profiles", function(err, results) {

        // use error handling
        if (err) throw err;

        res.render('index', {
            title: 'Home page',
            people: results
        });
    });
});

// use route parameters
app.get('/profile/:id', function (req, res) {
    var params = req.params.id;
    console.log(params);
    connection.query("SELECT * FROM profiles WHERE id =" + params, function(err, results) {
        if (err) throw err;
        console.log(results);
        person = results[0];

        res.render('profile', {
            title: `About ${person.firstname} ${person.lastname}`,
            person
        });
    });
});


