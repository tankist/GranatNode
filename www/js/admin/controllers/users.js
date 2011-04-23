(function (window, document, $) {

	var UsersView = window.views.users;
	var UserModel = window.models.user;

	var UsersController = BaseController.extend({
		routes : {
			'!/users' : 'index',
			'!/users/page:page' : 'index',
			'!/users/add' : 'add',
			'!/users/edit' : 'edit'
		},

		index : function(page) {
			UsersView.render();
		},

		add : function() {
			UsersView.model = new UserModel();
			UsersView.render().form();
		},

		edit : function() {
			var user = new UserModel();
			/*user.fetch({
				success : function(data) {
					UsersView.render().form();
				}
			});*/
			UsersView.model = user;
			user.set({
				first_name : 'Ololo',
				email : 'stalin1945@gmail.com'
			});
			UsersView.render().form();
		}
	});

	//Instantiate user controllers
	var userControllerInstance = new UsersController();

}(this, this.document, this.jQuery));