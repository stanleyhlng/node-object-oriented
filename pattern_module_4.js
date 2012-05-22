var someModule = (function() {

	// private attributes

	var privateVar = 5;

	// private methods

	var privateMethod = function() {
		return 'Private Test';
	};

	return {
		
		// public attrivutes

		publicVar: 10,

		// public methods

		publicMethod: function() {
			return 'Public Test';
		},

		// let's access the private members

		getData: function() {
			return privateMethod() + this.publicMethod() + privateVar;
		}
	}

}());

// Test
console.log( someModule.getData() );
