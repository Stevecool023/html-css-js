/*
 * Understanding function scope and closures is vital for managing variable visibility.
 */

/* Scope and closures example */
let globalVar = "I'm global!";

function exampleFunction() {
	let localVar = "I'm local!";

	function innerFunction() {
		console.log(globalVar); // Accessing global variables
		console.log(localVar); // Accessing local variable
	}
	
	return innerFunction;
}

let closure = exampleFunction();
closure(); // Output: I'm global! \n I'm local!
