(function (exports,external) {
	'use strict';

	var foo = 'unused';

	const quux = 1;

	const other = () => quux;

	function bar () {
		return foo;
	}

	function baz () {
		return 13 + external.value;
	}

	var create = Object.create;
	var getPrototypeOf = Object.getPrototypeOf;

	exports.baz = baz;
	exports.create = create;
	exports.getPrototypeOf = getPrototypeOf;
	exports.strange = quux;

}((this.stirred = this.stirred || {}),external));
