// Creates a new Object object and stores it in 'obj'
var obj = new Object();

// Set some properties of the object to different values
obj.val = 5
obj.getVal = function() {
    return this.val;
};

console.log( obj.val === 5 );
console.log( obj.getVal() === 5 );
