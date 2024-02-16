#!/usr/bin/node

// Constructor function for Animal
function Animal(name) {
  this.name = name;
}

// Adding a method to the prototype
Animal.prototype.makeSound = function() {
  console.log('Some generic sound');
};

// Defining a 'Dog' class:

class Dog extends Animal {
  // Constructor automatically calls the parent constructor
  constructor(name) {
    super(name);
  }

  // Method specific to Dog
  bark() {
    console.log(this.name + ' is barking.');
  }
}

// Creating an instance of Dog
let labrador = new Dog('Max');

// Inherited method from Animal
labrador.makeSound(); // Outputs: Some generic sound

// Method specific to Dog
labrador.bark(); // Outputs: Max is barking.
