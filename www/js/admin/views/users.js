(function (window, document, $) {

	var UserForm = Backbone.View.extend({
		tagName:'div',

		render:function() {
			$(this.el).html(window.tmpl.getTemplate('addUserForm'));
			return this;
		}
	});

	var UsersLayout = Backbone.View.extend({
		el : $('#body'),

		events: {
			
		},

		initialize: function() {
			_.bindAll(this, 'render');
			if (this.model instanceof Backbone.Model) {
				this.model.bind('change', this.render);
				this.model.view = this;
			}
		},

		render:function() {
			$(this.el).html(window.tmpl.getTemplate('userList'));
			return this;
		},

		form : function() {
			var $dialogContainer = $('#formContainer'),
				addUserForm = new UserForm(),
				model = this.model;
			$dialogContainer
				.html(addUserForm.render().el)
				.dialog({
					title : 'Add user',
					width : '50%',
					modal : true,
					buttons : {
						Save : function() {
							var form = $(this).find('form').get(0);
							model.save(form.getValues());
							$(this).dialog('close');
						},
						Cancel : function() {
							$(this).dialog('close');
						}
					},
					close : function() {
						document.location.hash = '!/users';
					}
				});
			var $form = $dialogContainer.find('form');
			if ($form.length > 0) {
				$form.get(0).populate(this.model.attributes);
			}
			return this;
		}
	});

	//Instantiate users view
	window.views.users = new UsersLayout();

}(this, this.document, this.jQuery));