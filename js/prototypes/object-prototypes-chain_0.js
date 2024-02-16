#!/usr/bin/node

// If a property or method is not found on the object itself,
// JavaScript looks up the chain until it finds the corresponding property or method.

let car = { brand: 'Toyota', model: 'Camry' };

// 'car' inherits 'toString' from 'Object.prototype'
console.log(car.toString()); // Outputs: [object Object]

// Adding a new property directly to 'car'
car.year = 2022;
console.log(`${car.brand} ${car.model}, ${car.year}`); // Outputs: Toyota Camry, 2022

// 'year' is not found in 'car', but it is found in 'Object.prototype'
console.log(car.toString()); // Outputs: [object Object]

/* Accessing the prototype of an object */

// Using Object.getProtototypeOf()
console.log(Object.getPrototypeOf(car));

// Using the __proto__ property
console.log(car.__proto__);

console.log(Object.prototype);
console.log(Object.__proto__);
