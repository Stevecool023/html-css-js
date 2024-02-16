const numbers = [0, 1, 2, 3, 4, 5, 6];

/* Array.prototype.find() */
const greaterThanZero = numbers.find(function (n) {
	return n > 0; // return number just greater than 0 if present
});
console.log(greaterThanZero); // 1
