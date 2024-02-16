#!/usr/bin/node

/* One can create JSON data using JavaScript objects and then convert them to JSON format using 'JSON.stringify()'. */

// Creating a JavaScript object
const person = {
  name: 'John Doe',
  age: 30,
  city: 'Example City'
};

// Converting the object to JSON
const jsonPerson = JSON.stringify(person);
console.log(jsonPerson);
