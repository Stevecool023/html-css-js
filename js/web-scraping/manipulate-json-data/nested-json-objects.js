#!/usr/bin/node

// JSON can contain nested objects and arrays.
// Access and manipulate nested data using dot notation or square brackets.

const nestedJson = '{"name":"John Doe","address":{"city":"Example City","country":"Example Country"}}';

const nestedObject = JSON.parse(nestedJson);

// Accessing nested properties
console.log(nestedObject.address.city); // Example City

// Modifying nested properties
nestedObject.address.city = 'New City';
console.log(nestedObject);
