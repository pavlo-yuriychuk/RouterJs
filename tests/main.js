define(['router'], function (Router) {
	'use strict';

	describe('Router.js test suite', function () {
		it('Should not be undefined', function () {
			expect(Router).to.be.a('function');
		});

		describe('#route', function () {
			var instance;
			beforeEach(function () {
				instance = new Router();
			});
			it('Should be chainable', function () {
				var callback = function () {};
				var result = instance.route('/:id/edit', callback);
				expect(result).to.be.instanceof(Router);
			});
		});

		describe('#navigate', function () {

		});
	});
});
