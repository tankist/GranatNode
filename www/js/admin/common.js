(function (window, document, $) {

	$LAB
		.script('/js/admin/models/users.js')
		
		.script('/js/admin/views/app.js')
		.script('/js/admin/views/users.js')
		
		.script('/js/admin/controllers/index.js')
		.script('/js/admin/controllers/users.js')
		.script('/js/admin/controllers/collections.js')

		.wait(function() {
			Backbone.history.loadUrl();
		});

}(this, this.document, this.jQuery));