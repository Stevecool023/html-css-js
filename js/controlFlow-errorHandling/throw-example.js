function divide(a, b) {
	if (b === 0) {
		throw new Error("Division by zero is not allowed");
	}
	return a / b;
}

try {
	let result = divide(10, 0);
	console.log(result); // Won't be reached coz an exception will be thrown
} catch (Err) {
	console.error("Caught an exception:", Err.message);
}
