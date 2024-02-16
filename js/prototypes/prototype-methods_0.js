#!/usr/bin/node

/* isPrototypeOf */
// Checks if an object is in the prototype chain of another object

let person = { name: 'John' };
let student = Object.create(person);
console.log(person.isPrototypeOf(student)); // Outputs: true
