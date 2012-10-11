function Car(listedPrice) {
    var price = listedPrice || 0;
    this.speed = 0;
    this.numWheels = 4;

    this.getPrice = function() {
        return price;
    };
}

Car.prototype.accelerate = function() {
    this.speed += 10;
};

function ElectricCar(listedPrice) {
    this.base = Car;
    this.base(listedPrice); 
    //price = listedPrice;

    this.dump = function() {
        console.log("speed", this.speed);
        console.log("numWheels", this.numWheels);
        console.log("price", this.getPrice());
    }
}

ElectricCar.prototype = new Car();

var cars = [];
cars.push(new ElectricCar(1000));
cars.push(new ElectricCar(1200));

for (var i = 0; i < cars.length; i++) {
    cars[i].dump();
}
