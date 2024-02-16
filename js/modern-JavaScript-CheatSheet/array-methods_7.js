const numbers = [0, 1, 2, 3, 4, 5, 6];

/*
 * Array.prototype.reduce()
 * The reduce method goal is to reduce all elements of the array it iterates on
 * into one single value.
 * How it aggregates thos elements is up to you.
 */

const sum = numbers.reduce(
	function(acc, n) {
		return acc + n;
	},
	0
);
console.log(sum);
