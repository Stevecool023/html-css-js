function myFunction() {
	var myVar = "Nick";
	if (true) {
		var myVar = "John";
		console.log(myVar); // "John"
		// myVar being function scoped, we just erased the previous myVar value "Nick" for "John"
	}
	console.log(myVar); // "John" - instructions in the if block affected this value.
}
myFunction();

/* console.log(myVar); // Throws a ReferenceError, myVar is not accessible outside the function. */
