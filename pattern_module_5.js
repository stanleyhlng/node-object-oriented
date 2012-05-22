var myRevealingModule = (function() {

	var name = "Stanley Ng";

	var age = "44";

	var updatePerson = function() {
		name = "Stan Ng";
	}

	var setPerson = function() {
		name = "Stanley Ng Set";
	}

	var getPerson = function() {
		return name;
	}

	return {

		set: setPerson,
		get: getPerson

	}

}());

// Test
console.log( myRevealingModule.get() );
