var connect = require('connect');

var index = require('./controllers/default.js').index;
var admin = require('./controllers/admin.js').admin;

var table = require('../lib/mysql/table.js');

connect()
	.use('/admin', admin)
	.use('/', index)
	.listen(3000);
