const person = {
	name: "Nick"
};
person.name = 'John' // this will work! person variable is not completely reassigned, but mutated
console.log(person['name']) // "John"
/* person = "Sandra" // raises an error, because reassignment is not allowed with const declared variables. */
