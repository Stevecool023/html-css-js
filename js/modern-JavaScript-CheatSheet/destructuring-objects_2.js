/* Destructuring is even more pleasant to use with arrow functions: */
const person = {
	firstName: "Nick",
	lastName: "Anderson",
	age: 35,
	sex: "M"
}

const joinFirstLastName = ({ firstName, lastName }) => firstName + '-' + lastName;

console.log(joinFirstLastName(person)); // "Nick-Anderson"
