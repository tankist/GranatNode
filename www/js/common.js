(function (window, document, $) {

	//prePostDispatch injection
	window.BaseController = Backbone.Controller.extend({
		route : function(route, name, callback) {
			var controller = this;

			if (typeof callback == 'function') {
				var cb = function() {
					var args = _.toArray(arguments);
					if (typeof controller.__preDispatch == 'function') {
						controller.__preDispatch.apply(controller, args);
					}
					controller.trigger.apply(controller, ['preDispatch', name] . concat(args));
					callback.apply(controller, args);
					if (typeof controller.__postDispatch == 'function') {
						controller.__postDispatch.apply(controller, args);
					}
					controller.trigger.apply(controller, ['postDispatch', name] . concat(args));
				}
			}

			Backbone.Controller.prototype.route.call(this, route, name, cb);
		},
		__preDispatch : function() {},
		__postDispatch : function() {}
	});

	Backbone.history || (Backbone.history = new Backbone.History);
	Backbone.history.start();

	//Initialize templates cache (lazy)
	doT.templateSettings = {
		begin : '<%',
		end : '%>',
		varname : 'vars'
	};
	window.tmpl = (function() {
		var cache = {};

		return {
			getTemplate : function(name) {
				if (!(name in cache)) {
					cache[name] = doT.template(document.getElementById(name).textContent);
				}
				return cache[name];
			}
		}
	})();

	window.views = {};
	window.models = {};
	window.collections = {};

}(this, this.document, this.jQuery));

(function (window, document, $) {

	_.extend(HTMLFormElement.prototype, {
		getValues : function() {
			var values = {}, el = this.elements;
			for (var i = 0, elementsCount = el.length; i < elementsCount; i++) {
				var element = el[i];
				values[element.name] = element.value;
			}
			return values;
		},
		populate : function(data) {
			_.each(this.elements, function(element, index) {
				if (element.name in data) {
					element.value = data[element.name];
				}
			});
			return this;
		}
	});

}(this, this.document, this.jQuery));