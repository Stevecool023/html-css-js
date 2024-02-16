let globalVar = "I'm global!"

function exampleFunction() {
	let localVar = "I'm local!"

	function innerFunction() {
		console.log(globalVar);
		console.log(localVar);
	}
	
	return innerFunction;
}

let innerFunc = exampleFunction();
innerFunc();
