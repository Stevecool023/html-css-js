/*
 * Declare class using the 'class' keyword
 */
class person {
	name;

	constructor(name) {
		this.name = name;
	}

	introduceSelf() {
		console.log(`Hi! I'm ${this.name}`);
	}
}

const giles = new person("Giles");
giles.introduceSelf(); // Hi! I'm Giles
