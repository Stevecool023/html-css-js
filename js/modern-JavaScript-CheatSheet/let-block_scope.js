function myFunction() {
	let myVar = "Nick";
	if (true) {
		let myVar = "John"
		console.log(myVar); // "John"
		// myVar being block scoped, we just created a new variable myVar.
		// this variable is not accessible outside this block and totally independent
		// from the first myVar created.
	}
	console.log(myVar); // "Nick", instructions in the if block did not affect this value
}
myFunction();

/* console.log(myVar); // ReferenceError: myVar is not accessible outside the function. */
