#!/usr/bin/node

/* The prototype chain is the mechanism by wchich
 * JavaScript objects inherit features from one another. */

let car = { brand: 'Toyota', model: 'Camry' };

// 'car' is linked to 'Object.prototype'
console.log(Object.getPrototypeOf(car) === Object.prototype); // Output: true

// 'Object.prototype' is the ultimate prototype in this chain.
console.log(Object.getPrototypeOf(Object.prototype)); // Outputs: null
console.log(Object.prototype);
