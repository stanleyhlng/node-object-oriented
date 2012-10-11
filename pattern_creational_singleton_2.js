var Singleton;

(function() {
  var instance;

  Singleton = function Singleton() {
  
    if (instance) {
      return instance;
    } 

    instance = this;

  }
  
}());

var s1 = new Singleton();
var s2 = new Singleton();
console.log(s1 === s2);
