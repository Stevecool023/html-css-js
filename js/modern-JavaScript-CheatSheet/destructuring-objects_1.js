const person = {
	firstName: "Nick",
	lastName: "Anderson",
	age: 35,
	sex: "M"
}

/* In destructuring the object parameter person, we get a more concise function: */
function joinFirstLastName({ firstName, lastName }) { // we create firstName and lastName variables by destructuring
	// person parameter.
	return firstName + '-' + lastName;
}

console.log(joinFirstLastName(person)); // "Nick-Anderson"
