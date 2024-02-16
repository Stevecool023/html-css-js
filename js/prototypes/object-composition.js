#!/usr/bin/node

// Object Composition: Instead of classical inheritance,
// one can use object composition by manually setting prototypes.
// This provides more flexibility.

let vehicle = { drive: function() { console.log('Vroom!'); } };
let car = { wheels: 4 };
Object.setPrototypeOf(car, vehicle);
