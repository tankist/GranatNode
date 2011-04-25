(function() {
	var _ = require('backbone/node_modules/underscore')._;

	function MysqlRow() {

	}

	function MysqlRowset() {

	}

	function MysqlTable() {

	}

	_.extend(MysqlTable.prototype, {
		fields : {},
		primaryKey : '',
		row : MysqlRow,
		rowset : MysqlRowset,
		initialize : function() {

		},
		describe : function() {

		}
	});

	exports.MysqlTable = MysqlTable;
	exports.MysqlRow = MysqlRow;
	exports.MysqlRowset = MysqlRowset;
})();
