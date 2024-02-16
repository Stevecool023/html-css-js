#!/usr/bin/node

// Constructor function for Animal
function Animal(name) {
  this.name = name;
}

// Adding a method to the prototype
Animal.prototype.makeSound = function() {
  console.log('Some generic sound');
};

function Bird(name) {
  // Call the parent constructor to initialize shared properties
  Animal.call(this, name);
}

// Set up prototype chain for inheritance
Bird.prototype = Object.create(Animal.prototype);

// Add a new method specific to Bird
Bird.prototype.fly = function() {
  console.log(this.name + ' is flying.');
};

// Creating an instance of Bird
let eagle = new Bird('Eddie');

// Inherited method from Animal
eagle.makeSound(); // Outputs: Some generic sound

// Method specific to Bird
eagle.fly(); // Outputs: Eddie is flying.

/* Instance Check */
console.log(eagle instanceof Bird); // Outputs: true
console.log(eagle instanceof Animal); // Outputs: true
