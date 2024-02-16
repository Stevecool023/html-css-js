const numbers = [0, 1, 2, 3, 4, 5, 6];

/* Array.prototype.map() */
const doubledNumbers = numbers.map(function (n) {
	return n * 2;
});
console.log(doubledNumbers);
