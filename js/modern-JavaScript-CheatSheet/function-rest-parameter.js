/*
 * In function parameters, we can use the rest operator to inject parameters into an array we can loop in.
 * There is already an arguments object bound to every function
 * that is equal to an array of all the parameters passed into the function.
 */
function myFunc() {
	for (var i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
	}
}

myFunc("Nick", "Anderson", 10, 12, 6);
