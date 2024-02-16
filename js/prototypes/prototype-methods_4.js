#!/usr/bin/node

/* Checking Property Existence */
// 'hasOwnProperty' helps avoid unintended access to inherited properties.

/* Iterating over own properties */
// 'Object.keys', 'Object.values', and 'Object.entries' facilitate iterating over
// an object's own properties.

let car = { brand: 'Toyota', model: 'Camry' };

// Iterating over own properties
for (let key of Object.keys(car)) {
  console.log(key, car[key]);
}
