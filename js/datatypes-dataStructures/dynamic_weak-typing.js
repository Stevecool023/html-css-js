let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
console.log(foo);
foo = true; // foo is now a boolean

console.log(foo);

/*
let foo = "James";
console.log(foo);
// Throws an error; foo already declared
*/

const number = 42; // foo is a number
const result = number + '1'; // JavaScript coerces foo to a string, so it can be concatenated with the other operand.
const numberResult = number + 1;

console.log(numberResult); // Output: 43
console.log(result); // Output: 421
