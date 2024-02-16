/*
 * Creating and Manipulating Arrays.
 * Arrays are used to store and organize collections of data.
 */

let fruits = ["apple", "orange", "banana"];

console.log(fruits[0]); // Accessing elements: apple
console.log(fruits.length); // Array length: 3

fruits.push("grape"); // Adding element to the end
console.log(fruits) ; // Output: ["apple", "orange", "banana", "grape"]
fruits.pop(); // Removing element from the end
console.log(fruits); // Output: ["apple", "orange", "banana"]
