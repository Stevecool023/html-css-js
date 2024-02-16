#!/usr/bin/node

let car = { brand: 'Toyota', model: 'Camry' };

// 'car' is linked to 'Object.prototype'
console.log(Object.getPrototypeOf(car) === Object.prototype); // Outputs: true

// 'Object.prototype' is the ultimate prototype in this chain.
console.log(Object.getPrototypeOf(Object.prototype)); // Outputs: null
