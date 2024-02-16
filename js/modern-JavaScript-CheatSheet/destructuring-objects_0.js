/* Function parameters */
// Destructuring is often used to destructure objects parameters in functions.
// Without destructuring

const person = {
	firstName: "Nick",
	lastName: "Anderson",
	age: 35,
	sex: "M"
}

function joinFirstLastName(person) {
	const firstName = person.firstName;
	const lastName = person.lastName;
	return firstName + '-' + lastName;
}

console.log(joinFirstLastName(person)); // "Nick-Anderson"
