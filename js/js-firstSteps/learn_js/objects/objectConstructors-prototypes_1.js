/*
 * Object Constructor and Prototype
 */

function Car(model, make, year) {
	this.model = model;
	this.make = make;
	this.year = year;
}

Car.prototype.displayInfo = function() {
	console.log(this.year + ' ' + this.model + ' ' + this.make);
};

let myCar = new Car('Toyota', 'fielder', 2020);
myCar.displayInfo();
