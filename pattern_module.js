var myModule = {

	myProperty: 'someValue',

	// object literals can contain properties and methods.
	// here, another object is defined for configuration
	// purposes
	myConfig: {
		useCache: true,
		language: 'en-US'
	},

	// a very basic method
	myMethod: function() {
		console.log( 'myMethod' );
	},
	
	// output a value based on current configuration
	myMethod2: function() {
		console.log( 'caching is: ' + ( this.myConfig.useCache ) ? 'enabled' : 'disabled' );
	},

	// override the current configuration
	myMethod3: function( newConfig ) {
		if ( typeof newConfig == 'object' ) {
			this.myConfig = newConfig;
			console.log( this.myConfig.language );
		}
	}
};

console.log( myModule.myProperty );
console.log( myModule.myConfig );
myModule.myMethod();
myModule.myMethod2();
myModule.myMethod3({
	'useCache': false,
	'language': 'fr-FR'
});
