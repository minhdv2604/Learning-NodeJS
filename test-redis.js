const express = require('express');
const redis = require('redis');

const app = express();

// create and connect redis client to local instance.
const client = redis.createClient();

// Lắng nghe sự kiện connect
client.on('connect', function() {
    // In ra Redis client connected
    console.log('Redis client connected');
});

// Lắng nghe sự kiện error
client.on('error', function (err) {
    // In ra Something went wrong + lỗi
    console.log('Something went wrong ' + err);
});

// set key 'my test key' có value 'my test value'
client.set('my test key', 'my test value', redis.print);
// get value từ key 'my test key'
client.get('my test key', function (error, result) {
    if (error) {
        console.log(error);
        throw error;
    }
    console.log('GET result ->' + result);
});


