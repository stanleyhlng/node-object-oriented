function CarMaker() {
}

CarMaker.prototype.drive = function() {
  return "Vroom, I have " + this.doors + " doors";  
}

CarMaker.Compact = function() {
  this.doors = 4;
}

CarMaker.Convertible = function() {
  this.doors = 2;
}

CarMaker.SUV = function() {
  this.doors = 24;
}

CarMaker.factory = function (type) {
  if (typeof CarMaker[type] !== "function") {
    throw {
      name: "Error",
      message: type + " doesn't exist"
    };
  }

  if (typeof CarMaker[type].prototype.drive !== "function") {
    CarMaker[type].prototype = new CarMaker();
  }

  return new CarMaker[type]();
}

var corolla = CarMaker.factory('Compact');
var solstice = CarMaker.factory('Convertible');
var cherokee = CarMaker.factory('SUV');

console.log(corolla.drive());
console.log(solstice.drive());
console.log(cherokee.drive());
