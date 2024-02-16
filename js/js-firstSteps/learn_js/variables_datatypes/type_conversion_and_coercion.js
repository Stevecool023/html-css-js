/*
 * JavaScript can implicitely convert data types (coercion) or explicitly convert them using functions like parseInt() or String()
 */

// Type conversion examples
let numString = "42";
let num =  parseInt(numString); // explicit conversion
let result = num + 8; // implicit conversion
let sumString = numString + 8; // Adding a string to a number

console.log('numString:', numString);
console.log('num:', num);
console.log('42 + 8:', result); // Output: 50
console.log('"42" + 8:', sumString); // Output: 428
