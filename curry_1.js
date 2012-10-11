var alien = {
  sayHi: function(who) {
    return "Hello" + (who ? ", " + who : "") + "!";
  }
};

console.log(alien.sayHi('world'));
console.log(alien.sayHi.apply(alien, ["humans"]));
