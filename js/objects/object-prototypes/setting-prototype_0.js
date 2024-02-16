/*
 * Using Object.create
 * The object.create() method creates a new Object
 * and allows one to specify an object that will be used as the new objects prototype.
 */

const personPrototype = {
	greet() {
		console.log("hello!");
	},
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!
