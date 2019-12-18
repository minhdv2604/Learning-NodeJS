# Demo Express + MySQL
 ## Route:
 + Có sử dụng router methods GET

    ```app.get('/', function(req, res) {
        connection.query("SELECT * FROM profiles", function(err, results) {

            // use error handling
            if (err) throw err;

            res.render('index', {
                title: 'Home page',
                people: results
            });
        });
    });
    ```
    
 + sử dụng router parameters
 
    ```app.get('/profile/:id', function (req, res) {
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
      ```
  
  + Route handlers: sử dụng 1 router gọi nhiều function
  
    ```var cb0 = function (req, res, next) {
        console.log('CB0')
        next()
      }

      var cb1 = function (req, res, next) {
        console.log('CB1')
        next()
      }

      app.get('/example/d', [cb0, cb1], function (req, res, next) {
        console.log('the response will be sent by the next function ...')
        next()
      }, function (req, res) {
        res.send('Hello from D!')
      })```
    
 ## Middleware: có 5 loại
  + Middleware tầng ứng dụng: được sử dụng với cú pháp app.use(), ưng dụng sẽ thực hiện các chức năng trong middleware đầu tiên.
  
    ```app.use(function (req, res, next) {
       console.log('Time:', Date.now())
       next()
     })
     ```
    
  + Middleware route: được sử dụng thông qua router của express 
  
    ```router.use('/user/:id', function (req, res, next) {
        console.log('Request URL:', req.originalUrl)
        next()
      }, function (req, res, next) {
        console.log('Request Type:', req.method)
        next()
      })
      ```
    
  + Middleware Error-handling: Có thêm tham số err để trả về lỗi 
  
     ```app.use(function (err, req, res, next) {
         console.error(err.stack)
         res.status(500).send('Something broke!')
        })
      ```
      
  + Middleware Built-in:
    
      `app.use(express.static(__dirname + '/public'));`
    
  + Middleware Third-party: sử dụng middleware của bên thứ ba, ta phải cài đặt package để sử dụng nó
  
    ```npm install cookie-parser
    
       var express = require('express')
       var app = express()`
       var cookieParser = require('cookie-parser')

       // load the cookie-parsing middleware
       app.use(cookieParser())
       ```
    
 ## Error handling
  + Bắt lỗi: sử dụng try catch để bắt lỗi 
  
     ```app.get('/', function (req, res, next) {
           setTimeout(function () {
           try {
             throw new Error('BROKEN')
            } catch (err) {
              next(err)
            }
          }, 100)
       })
    ```
    
  + Thêm tham số err để trả về lỗi
  
    ```app.use(function (err, req, res, next) {
        console.error(err.stack)
        res.status(500).send('Something broke!')
      })
    
 ## Template engine pug
  + Các file .pug nằm trong folder views đây là mặc định của express
  + Để sử dụng pug thì phải khai báo
    
    `app.set('view engine', 'pug');`
    
  + Pug có thể tạo layout, các file kế thừa từ file layout
  + Pug biên dịch ra html
  
 ## Connect mysql

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'dbuser',
      password: 's3kreee7',
      database: 'my_db'
    })

    connection.connect()

    connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
      if (err) throw err

      console.log('The solution is: ', rows[0].solution)
    })

    connection.end()
