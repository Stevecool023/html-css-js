/*
 * Custom Error Objects
 * Creating custom error objects allows you to provide more meaningful information about errors.
 */

class CustomError extends Error {
	constructor(message) {
		super(message);
		this.name = "CustomError";
	}
}

function throwError() {
	throw new CustomError("This is a custom error");
}

try {
	throwError();
} catch (error) {
	console.error("Caught:", error.name, "-", error.message);
}
