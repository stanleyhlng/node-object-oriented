var myNamespace = (function() {

	var myPrivateVar = 0;

	var myPrivateMethod = function ( someText ) {
		console.log( someText + ":" + myPrivateVar );
	};	

	return {
		
		myPublicVar: 'foo',

		myPublicMethod: function( bar ) {
			myPrivateVar++;
			myPrivateMethod( bar );
		}				

	}

}());


// Test
console.log( myNamespace.myPublicVar );
myNamespace.myPublicMethod( 'Hello World' );
