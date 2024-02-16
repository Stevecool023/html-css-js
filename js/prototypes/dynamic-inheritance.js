#!/usr/bin/node

// Dynamic Inheritance: One can dynamically change the prototype of an object
// based on certain conditions or at runtime.

let animal = {};
let isDog = true;

if (isDog) {
  let dog = { bark: function() { console.log('Woof!'); } };
  Object.setPrototypeOf(animal, dog);
}
