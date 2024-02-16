/* Object */
const person = {
	firstName: "Nick",
	lastName: "Anderson",
	age: 35,
	sex: "M"
}

/* Without destructuring
const first = person.firstName;
const age = person.age;
const city = person.city || "Paris"; */

/* With destructuring, all in one line: */
const { firstName: first, age, city = "Paris" } = person; // That's it!

console.log(age);
console.log(city);
console.log(first);
/* console.log(firstName); // ReferenceError: person.firstName exists but the new variable created is named first. */
