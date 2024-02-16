function doSomethingErrorProne() {
	if (ourCodeMakesAMistake()) {
		throw new Error("The message");
	} else {
		doSomethingToGetAJavaScriptError();
	}
}

try {
	doSomethingErrorProne();
} catch (e) {
	// Now, we actually use 'console.errro()'
	console.error(e.name); // 'Error'
	console.error(e.message); // 'The message', or a JavaScript error message
}
