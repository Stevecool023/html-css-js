/*
 * Defining a property in an object,
 * when a property with the same name is defined in the object's prototype.
 */
const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95

myDate.getYear = function () {
	console.log("something else!");
};

myDate.getYear(); // 'something else!'
