// A simple function which takes a name and saves
// it to the current context
function User( name ) {
    this.name = name;
}

// Create a new instance of that function, with the specified name
var me = new User( "Stanley Ng" );

// We can see that its name has been set as a property of itself
console.log( me.name );

// And that it is an instance of the User object
console.log( me.constructor === User );
console.log( typeof me === "object" );
