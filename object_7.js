// Create a new User object constructor
function User( name, age ) {
    
    // Attempt to figure out the year that the user was born
    var year = (new Date()).getFullYear() - age;
    

    // Create a ne w Privileged method that has acces to
    // the year variable, but is still publically available
    this.getYearBorn = function() {
        return year;
    }
}

// Create anew instanceo of the user object
var user = new User( "Bob", 44 );

console.log( user.getYearBorn() );
console.log( user.year );
console.log( user );
