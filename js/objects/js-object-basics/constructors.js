/*
 * This first example is without using constructors.
 */

function createPerson(name) {
	const obj = {};
	obj.name = name;
	obj.introduceSelf = function () {
		console.log(`Hi! I'm ${this.name}.`);
	};
	return obj;
}

const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();
// "Hi! I'm Salva.

const frankie = createPerson("Frankie");
frankie.namel;
frankie.introduceSelf();
// "Hi! I'm Frankie."


/* 
 * Second example
 * Using Constructors */
function person(name) {
	this.name = name;
	this.introduceSelf = function () {
		console.log(`Hi! I'm ${this.name}.`);
	};
}

const carl = new person("Carl");
carl.name;
carl.introduceSelf();
// "Hi! I'm Carl."

const maxie = new person("Maxie");
maxie.name;
maxie.introduceSelf();
// "Hi! I'm Maxie."
