/*
 * Array Methods (map, filter, reduce)
 * Array methods allow you to perform operations on each element of an array.
 */

// Example
let numbers = [1, 2, 3, 4, 5];

// Map: Doubling each element
let doubled = numbers.map(function(num) {
	return num * 2;
});
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Filter: Selecting even numbers
let evenNumbers = numbers.filter(function(num) {
	return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

// Reduce: Calculating the sum
let sum = numbers.reduce(function(accumulator, current) {
	return accumulator + current;
}, 0);
console.log(sum); // Output: 15
