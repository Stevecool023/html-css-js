/* throw expressions */
throw "Error2"; // String type
throw 42; // Number type
throw true; // Boolean type
throw {
	toString() {
		return "I'm an object!";
	},
};
