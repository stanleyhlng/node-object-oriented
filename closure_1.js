// A function that generates a new function for adding numbers
function addGenerator( num ) {
    return function( add ) {
        return num + add;
    };
}

var addFive = addGenerator( 5 );

console.log( addFive.toString() );
console.log( addFive( 4 ) );
