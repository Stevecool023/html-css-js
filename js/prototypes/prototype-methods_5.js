#!/usr/bin/node

/* Prototype chain manipulation */
// 'isPrototypeOf' is useful when dynamically setting prototypes.

let animal = {}
let isDog = true;

if (isDog) {
  let dog = { bark: function() { console.log('Woof!'); } };
  Object.setPrototypeOf(animal, dog);
}
