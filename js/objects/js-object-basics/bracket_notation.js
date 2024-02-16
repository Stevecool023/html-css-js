const person = {
	name: ['Bob', 'Smith'],
	age: 32
}

function logProperty(propertyName) {
	console.log(person[propertyName]);
}

logProperty('name');
logProperty('age');
