#!/usr/bin/node

/* Object.entries */
// Returns an array of a given object's own enumerable property '[key, value]' pairs.

let car = { brand: 'Toyota', model: 'Camry' };
console.log(Object.entries(car)); // Outputs: [['brand', 'Toyota'], ['model', 'Camry']]
