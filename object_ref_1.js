// Set obj to an empty object
var obj = new Object();

// The objRef is now refers to the other object
var objRef = obj;

// Modify a property in the original object
obj.oneProperty = "stanley.ng";

console.log( obj.oneProperty === objRef.oneProperty);
