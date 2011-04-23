(function (window, document, $) {

	var IndexController = Backbone.Controller.extend({
		routes : {
			'' : 'index'
		},

		index : function() {
			document.location.hash = '!/users';
		}
	});

	//Instantiate index controllers
	var indexControllerInstance = new IndexController();

}(this, this.document, this.jQuery));