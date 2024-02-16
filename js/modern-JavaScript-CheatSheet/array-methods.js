const numbers = [0, 1, 2, 3, 4, 5, 6];
const doubleNumbers = numbers.map(n => n * 2); // [0, 2, 4, 6, 8, 10, 12]
const evenNumbers = numbers.filter(n => n % 2 === 0); // [0, 2, 4, 6]
const sum = numbers.reduce((prev, next) => prev + next, 0); // 21
const greaterThanFour = numbers.find((n) => n>4); // 5


console.log(numbers);
console.log(doubleNumbers);
console.log(evenNumbers);
console.log(sum);
console.log(greaterThanFour);
