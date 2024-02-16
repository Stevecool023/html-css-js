/*
 * Objects can provide an interface to other code that wants to use them
 * but maintain their own internal state.
 * Encapsulation is keeping an object's internal state private,
 * and generally making a clear division between its public interface
 * and its private internal state.
 */

/*
 * Encapsulation feature is useful as it enables the programmer to change the
 * internal implementation of an object without having to find and update
 * all the code that uses it.
 */

// Student allowed to study archery if they are in second year of above.
if (student.year > 1) {
	// allow the student into the class
}

/*
 * The above is challenging;
 * if we decide to change criteria for studying archery,
 * we have to update every place in our system that performs this test.
 * It is better to have a 'canStudyArchery()' method on 'Student' objects,
 * in order to implement the logic in one place.
 */
class Student : extends person
	properties
		year
	constructor
		Student(name, year)
	methods
		introduceSelf()
		canStudyArchery() { return this.year > 1 }

if (student.canStudyArchery()) {
	//allow the student into class
}


/* ENCAPSULATION */
// making code private; not accessible to other code outside the object.
class Student : extends person
	properties
		private year
	constructors
		Student(name, year)
	methods
		introduceSelf()
		canStudyArchery() { return this.year > 1 }

student = new Student('Weber', 1)
student.year // error: 'year' is a private property of Student
// To enforce the above in languages that does not support it,
// programmers use naming conventions, such as starting the name with an underscore,
// to indicate that the property should be considered private.
