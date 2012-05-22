function makeArray() {
    // The temporary array
    var theArray = [];

    // Go through each of the submitted arguments
    for (var i = 0; i < arguments.length; i++) {
        theArray.push(arguments[i]);
    }

    // Return the resultant array
    return theArray;
}

console.log(makeArray(1, 2, 3, 4, 5, "stanley", "yahoo"));
