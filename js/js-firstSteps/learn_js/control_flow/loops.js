/*
 * Loops(for, while, do-while)
 * Loops are used to repeat code blocks.
 */

// For loop
for (let i = 1; i <= 5; i++) {
	console.log("Iteration " + i);
}

// While loop
let count = 0;
while (count < 3) {
	console.log("Count: " + count);
	count++;
}

// Do-while loop
let num = 5;
do {
	console.log("Number: " + num);
	num--;
} while (num > 0);
