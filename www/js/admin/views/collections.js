(function (window, document, $) {

	var tmpl = window.tmpl;

	var CollectionView = Backbone.View.extend({
		tagName:'div',

		render:function() {
			$(this.el).html(tmpl.getTemplate('collectionForm'));
			return this;
		}
	});

	var CollectionsView = Backbone.View.extend({
		el : $('#body'),

		render:function() {
			$(this.el).html(tmpl.getTemplate('userList'));
			return this;
		},

		add : function() {
			var addView = new CollectionView();
			this.$('#actionBody').html(addView.render().el);
			return this;
		}
	});

	//Instantiate users view
	window.views.users = new UserView();

}(this, this.document, this.jQuery));