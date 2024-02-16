/*
 * A conditional statement is a set of commands that executes if a specified condition is true.
 * if...else and switch.
 */

// if...else statement
/*
 * Use the if statement to execute a statement if a logical condition is true.
 * Use the optional else clause to execute a statement if the condition is false.
 */

function checkData() {
	if (document.form1.threeChar.threeChar.value.length === 3) {
		return true;
	} else {
		alert(
			`Enter exactly three characters.
			${document.form1.threeChar.value} is not valid.`,
		);
		return false;
	}
}
