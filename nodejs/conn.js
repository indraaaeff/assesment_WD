var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "web_dev_biznet"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;