var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    bodyParser = require('body-parser'),
    controller = require('./controller');

var response = require('./res');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',function(req,res){
	var obj = req.body;
	// console.log('body:', obj);

	var arrdetail = [];
	obj.forEach(function(val) {
		var arr_temp1 = new Array();
		arr_temp1.push(val.username);
		arr_temp1.push(val.hair_color);
		arr_temp1.push(val.height);
	 	// console.log(arr_temp);
	 	arrdetail.push(arr_temp1);
	});

	var format = {
		"h": [
			"username",
		    "hair_color",
		    "height"
		],
		"d": arrdetail
	};
	// console.log(JSON.stringify(format));

    response.ok(format, res);
	
});

var routes = require('./routes');
routes(app);

app.listen(port);
console.log('Your server is started, RESTful API server started on: ' + port);
