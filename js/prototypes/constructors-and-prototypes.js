#!/usr/bin/node

// Constructor function for Animal
function Animal(name) {
  this.name = name;
}

// Adding a method to the prototype
Animal.prototype.makeSound = function() {
  console.log('Some generic sound');
};

// Creating an instance using the constructor
let dog = new Animal('Buddy');

// Accessing a property
console.log(dog.name); // Outputs: Buddy

// Invoking a method from the prototype
dog.makeSound(); // Outputs: Some generic sound
