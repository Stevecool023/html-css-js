#!/usr/bin/node

// To work with JSON data in JavaScript, one need to parse the JSON string back into a JavaScript object using 'JSON.parse()'

const jsonString = '{"name":"John Doe","age":30,"city":"Example City"}';

// Parsing the JSON string to a JavaScript object
const personObject = JSON.parse(jsonString);
console.log(personObject);

/* Accessing and Modifying JSON Properties: */
// Once you have a JavaScript object, you can access and modify its properties just like any other object.

// Accessing properties.
console.log(personObject.name); // John Doe

// Modifying properties:
personObject.age = 31;
console.log(personObject);

/* Adding Properties to JSON: */
// One can add new properties to a JavaScript object and then convert it back to JSON.

personObject.email = 'john@example.com';

// Converting the modified object to JSON.
const updatedJson = JSON.stringify(personObject);
console.log(updatedJson);

/* Stringifying JSON with Indentation: */
/*
 * When using 'JSON.stringify()', one can include a third parameter for indentation to create more readable JSON strings.
 */

const indentedJson = JSON.stringify(personObject, null, 2);
console.log(indentedJson);
