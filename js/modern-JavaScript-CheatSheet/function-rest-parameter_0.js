/* function rest parameter */

function createStudent(firstName, lastName, ...grades) {
	const avgGrade = grades.reduce((acc, curr) => acc + curr, 0) / grades.length; // computes average grade from grades
	
	return {
		firstName: firstName,
		lastName: lastName,
		grades: grades,
		avgGrade: avgGrade
	}
}

const student = createStudent("Nick", "Anderson", 10, 12, 6);
console.log(student);
