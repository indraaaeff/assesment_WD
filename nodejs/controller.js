'use strict';

var response = require('./res');
var connection = require('./conn');
var server = require('./server');

// var get = require('./server.js');

// app.use('/server', get);

// router.get('/', function (req, res) {
//   res.send('About this wiki');
//   console.log('wiki');
// })

exports.users = function(req, res) {
    connection.query('SELECT * FROM person', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

// var rawdata = '[{"username":"ali","hair_color":"brown","height":1.2},{"username":"marc","hair_color":"blue","height":1.4},{"username":"joe","hair_color":"brown","height":1.7},{"username":"zehua","hair_color":"black","height":1.8}]';

// exports.get = function(req, res) {
//     console.log(req);
//     console.log(res);
//     if (res) {
// 		response.ok("res", res)
//     }
//     if (req) {
//     	response.ok("req", req)
//     }
// };

exports.index = function(req, res) {
    response.ok("asd", res)
};
// exports.index = function(req, res) {
//     response.ok("Hello from the Node JS RESTful side!", res)
// };