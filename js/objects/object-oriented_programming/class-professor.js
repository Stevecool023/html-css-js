/*
 * Pseudocode
 */
class professor
	properties
		name
		teaches
	methods
		grade(paper)
		introduceSelf()

/*
 * The process of creating an instance is performed by a special function
 * called a constructor.
 *
 * Pseudocode
 */
class profesor
	properties
		name
		teaches
	constructor
		profesor(name, teaches)
	methods
		grade(paper)
		introduceSelf()

/*
 * After having a constructor,
 * we can create some professors.
 * keyword 'new' is often used to signal that a constructor is being called.
 */

walsh = new professor("Walsh", "Psychology");
lillian = new professor("Lillian", "Poetry");

walsh.teaches; // 'Psychology'
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your psychology professor.'

lillian.teaches; // 'Poetry'
lillian.introduceSelf(); // 'My name is Professor Lillian and I will be your Poetry professor.'
