/*
 * Object Constructors and Prototypes
 * Constructors and prototypes allow you to create multiple objects with shared properties and methods.
 */

function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
}

Car.prototype.displayInfo = function() {
	console.log(this.year + " " + this.make + " " + this.model);
};

let myCar = new Car("Toyota", "Camry", 2022);
myCar.displayInfo(); // Output: 2022 Toyota Camry
