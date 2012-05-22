var basketModule = (function() {

	// private properties

	var basket = [];

	// private methods

	var doSomethingPrivate = function() {
	};
	

	var doSomethingElsePrivate = function() {
	};

	return {

		// public variable
		
		addItem: function( val ) {
			basket.push( val );
		},

		getItemCount: function() {
			return basket.length;
		},

		doSomething: doSomethingPrivate(),

		getTotal: function() {
			var q = this.getItemCount();
			var p = 0;
			while( q-- ) {
				p += basket[q].price;
			}
			return p;
		}
	}

}());

// Test
basketModule.addItem({
	item: 'bread',
	price: 0.5
});
basketModule.addItem({
	item: 'butter',
	price: 0.3
});

console.log( basketModule.getItemCount() );
console.log( basketModule.getTotal() );

