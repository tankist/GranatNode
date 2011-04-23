(function (window, document, $) {

	var CollectionsController = BaseController.extend({
		routes : {
			'!/collections' : 'index',
			'!/collections/page:page' : 'index'
		},

		index : function(page) {

		}
	});

	//Instantiate collections controller
	var collectionsControllerInstance = new CollectionsController();

}(this, this.document, this.jQuery));