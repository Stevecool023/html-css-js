function divide(a, b) {
	if (b === 0) {
		throw new Error("Division by zero is not allowed");
	}
	return a / b;
}

try {
	let result = divide(10, 0);
	console.log(result); // This line won't be reached if an exception will be thrown.
} catch (error) {
	console.log("Caught an exception:", error.message);
}
