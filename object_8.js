// Create a new user object that accepts an object of properties
function User( properties ) {

    var set = function( key ) {
        return function( val ) { 
            properties[key] = val;
        }
    }

    var get = function( key ) {
        return function() {
            return properties[key];
        }
    }

    // Iterate through the properties of the object, and make sure
    // that it's property scoped
    for ( var key in properties ) {

        // Create a new getter for the property
        this[ "get" + key ] = get( key ); 

        // Create a new setter for the property 
        this[ "set" + key ] = set( key ); 

    }
}

// Create a new user object instance and pass in an object of 
// properties to seed it with
var user = new User({
    name: "Bob",
    age: 44
});

console.log( user );
//console.log( user.name == null );
//console.log( user.getname.toString() );
console.log( user.getname() === "Bob" );
console.log( user.getage() === 44 );

user.setage( 22 );
console.log( user.getage() === 22 );
