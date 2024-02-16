const numbers = [0, 1, 2, 3, 4, 5, 6];
console.log('numbers:', numbers);
console.log();

function doubleNumbers() {
	const doubledNumbers = [];
	
	for (const number of numbers) {
		doubledNumbers.push(number * 2);
	}
	return doubledNumbers;
}
const doubled = doubleNumbers();
console.log('doubledNumbers:', doubled);
console.log();

function evenNumbers() {
	const evenedNumbers = [];

	for (const number of numbers) {
		if (number % 2 === 0) {
			evenedNumbers.push(number);
		}
	}
	return evenedNumbers;
}

const even = evenNumbers();
console.log('evenNumbers:', even);
console.log();

function sum() {
	let addition = 0;

	for (const number of numbers) {
		addition += number;
	}
	return addition;
}

const total = sum();
console.log('sum:', total);
console.log();

function greaterThanFour() {
	const greaterThan_4 = [];

	for (const number of numbers) {
		if (number > 4) {
			greaterThan_4.push(number);
			break; // stop the loop after the first greater 4 is found.
		}
	}
	return greaterThan_4;
}

const greaterThan = greaterThanFour();
console.log('greaterThanFour:', greaterThan);
