var express = require('express');
var router = express.Router();
 
// Methods get
router.get('/', function(req, res){
   res.send('Ban da truy cap dia chi /user bang phuong thuc GET');
});

// Methods post
router.post('/', function(req, res){
   res.send('Ban da truy cap dia chi /user bang phuong thuc POST');
});
 
// Xuất bộ định tuyến này để sử dụng ở file index.js
module.exports = router;