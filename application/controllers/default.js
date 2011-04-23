var connect = require('connect');

exports.index = connect(connect.router(function(app) {
	app.get('/', function(req, res) {
		res.end('Index');
	});
}));