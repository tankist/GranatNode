(function (window, document, $) {

	var AppView = Backbone.View.extend({
		el : $('#body'),
		initialize:function() {
			
		},
		render:function() {
			this.el.html('Ololo');
		}
	});

	//Instantiate application view
	window.appViewInstance = new AppView();

}(this, this.document, this.jQuery));