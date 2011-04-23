var connect = require('connect');

exports.admin = connect(connect.router(function(app) {
	app.get('/', function(req, res) {
		res.end('Index');
	});
	
	app.get('/collections', function(req, res) {
		res.end('List of all collections');
	});
	
	app.get('/collection/:id', function(req, res) {
		res.end('Collection #' . req.params.id);
	});

	app.post('/collections/', function(req, res) {
		
	});
}));