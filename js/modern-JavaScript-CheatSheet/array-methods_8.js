const numbers = [0, 1, 2, 3, 4, 5, 6];

/* Array.prototype.reduce() */
// Using arrow function
const evenNumbers = numbers.reduce((acc, n) => acc + n, 0);
console.log(evenNumbers);
