var expres = require('express');
var app = expres();
var request = require('request');

app.use(expres.static('public'));
app.set('view engine', 'ejs');
app.listen(2020);

app.get('/', function (req, res) {
    request('https://www.ominext.com/', function (err, response, body) {
        if (err) {
            throw err;
        } else {
            res.render('index', {html: body});
        }
    });

});