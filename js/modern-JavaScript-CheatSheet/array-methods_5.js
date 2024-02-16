const numbers = [0, 1, 2, 3, 4, 5, 6];

/* array.prototype.filter(); */
const evenNumbers = numbers.filter(function(n) {
	return (n % 2 === 0);
});
console.log(evenNumbers);
