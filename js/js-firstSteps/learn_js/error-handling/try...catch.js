/*
 * Handling Errors with try...catch
 * JavaScript provides a mechanism for handling errors using the try...catch statement.
 */

function divide(a, b) {
	try {
		if (b === 0) {
			throw new Error("Division by zero is not allowed");
		}
		return a / b;
	} catch (error) {
		console.error("Error:", error.message);
		return null;
	}
}

console.log(divide(10, 2)); // Output: 5
console.log(divide(8, 0)); // Output: Error: Division by zero is not allowed
