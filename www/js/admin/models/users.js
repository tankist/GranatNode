(function (window, document, $) {

	var User = Backbone.Model.extend({
		defaults : {
			role : 'guest'
		},
			url : '/admin/users/'
	});

	var Users = Backbone.Collection.extend({
		model : User
	});

	window.models.user = User;
	window.collections.users = Users;

}(this, this.document, this.jQuery));