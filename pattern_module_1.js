var testModule = (function() {

	var counter = 0;	

	return {
		
		incrementCounter: function() {
			return counter++;
		},

		resetCounter: function() {
			console.log( 'counter value prior to reset: ' + counter );
			counter = 0;
		}

	};

}());

// test
testModule.incrementCounter();
testModule.resetCounter();
