class Person {
	name;

	constructor(name) {
		this.name = name;
	}

	introduceSelf() {
		console.log(`Hi! I'm ${this.name}.`);
	}
}

class Professor extends Person {
	teaches;

	constructor(name, teaches) {
		super(name);
		this.teaches = teaches;
	}

	introduceSelf() {
		console.log(
			`Hi! I'm professor ${this.name} and I will be taking you through ${this.teaches}.`
		);
	}
}

class Student extends Person {
	#year;

	constructor(name, year) {
		super(name);
		this.#year = year;
	}

	introduceSelf() {
		console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
	}

	canStudyArchery() {
		return this.#year > 1;
	}
}

const summers = new Student("Summers", 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
summers.canStudyArchery(); // true

/* summers.#year; */ // SyntaxError`.
