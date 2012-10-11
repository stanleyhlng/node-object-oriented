function setup() {
  var count = 0;
  return function() {
    return count++;
  }
}

var next = setup();
console.log(next());
console.log(next());
console.log(next());
