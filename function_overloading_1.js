// A Simple Function for Sending a Message
function sendMessage( msg, obj ) {
    // If both a message and obj are provided
    if ( arguments.length == 2 ) {
        // Send the message to the object
        obj.handleMsg( msg );
    } else {
        // Otherwise, assume that only a mesage was provided
        console.log( msg );
    }
}

// Call the function with one argument
sendMessage( "Hello, World!" );

// Otherwise, we can pass in our own object that handles
// a different way of displaying information
sendMessage( "How are you?", {
    handleMsg: function( msg ) {
        console.log( "This is a custom message: " + msg );
    }
});
