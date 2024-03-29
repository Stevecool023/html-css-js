/*
 * Compute total grade sum for students with grades 10 or above
 * by composing map, filter and reduce:
 */

const students = [
	{ name: "Nick", grade: 10 },
	{ name: "John", grade: 15 },
	{ name: "Julia", grade: 19 },
	{ name: "Nathalie", grade: 9 },
];

const aboveTenSum = students
.map(student => student.grade) // we map the students array to an array of their grades
.filter(grade => grade >= 10) // we filter the grades array to keep those 10 or above
.reduce((prev, next) => prev + next, 0); // we sum all the grades 10 or above one by one

console.log(aboveTenSum) // 44
