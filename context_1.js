var obj = {
    yes: function() {
        // this == obj
        this.val = true;
    },
    no: function() {
        this.val = false;
    }
};

// We see that there is no val property in the 'obj' object
console.log( obj.val == null );

// We run the yes function and it changes the val property
// associated with the 'obj' object
obj.yes();
console.log( obj.val == true );

// However, we now point window.no to the obj.no method and run it
process.no = obj.no;
console.log( process.no.toString() );
process.no();

// This results in the object staying the same (as the context was
// switched to the window object)
console.log( obj.val == true );

// and window val property getting updated
console.log( process.val == false );
