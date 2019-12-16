var expres = require('express');
var app = expres();
var Client = require('node-rest-client').Client;
var client = new Client();

app.listen(2050);

app.get('/', function (req, res){
    // gọi API listUsers
    client.get("http://localhost:2040/listUsers",function (data, response) {
        // data trả về là kiểu buffer, convert data về kiểu string
        const jsonData = Buffer.from(data).toString('utf-8');
        // in data ra màn hình
        res.send(jsonData);
    });  
});

app.get('/:id', function (req, res){
    // Tạo object với id = tham số id
    let args = {
        path: { "id": req.params.id },
    };
    // gọi API chi tiết một user, truyền tham số id vừa get ở trên
    client.get("http://localhost:2040/${id}", args, function (data, response) { 
        // data trả về là kiểu buffer, convert data về kiểu string
        const jsonData = Buffer.from(data).toString('utf-8');
        // in data ra màn hình
        res.send(jsonData);
    });
});


 
 
