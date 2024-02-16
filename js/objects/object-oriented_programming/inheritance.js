/*
 * Pseudocode
 */

/* Student class definition */
class Student
	properties
		name
		year
	constructor
		Student(name, year)
	methods
		introduceSelf()

/* This is where inheritance comes in
 * Realizing that students and professors have common properties
 */
class Person
	properties
		name
	constructor
		person(name)
	methods
		introduceSelf()

class professor : extends Person
	properties
		teaches
	constructor
		professor(name, teaches)
	methods
		grade(paper)
		introduceSelf()

class Student : extends Person
	properties
		year
	constructor
		Student(name, year)
	methods
		introduceSelf()
/*
 * 'introduceSelf()' is defined in all three classes.
 * The reason for this is that while all people want to introduce themselves,
 * the way they do it is so different.
 */

walsh = new professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

summers = new Student("Summers", 1);
summers.introduceSelf(); // 'My name is Summers and I'm in the first year.'

/* We might have a default implementation of 'introduceSelf()'
 * for people who aren't students or professors. */
pratt = new Person("Pratt");
pratt.introduceSelf(); // 'My name is pratt.'
