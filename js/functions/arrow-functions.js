/* 
 * Instead of:
 * textBox.addEventListener("keydown", function (event) {
 * console.log(`You Pressed "${event.key}".`);
 * });
 * 
 * Use arrow function as follows:
 */

textBox.addEventListener("keydown", (event) => {
	console.log(`You pressed "${event.key}".`);
});

/* 
 * If the function takes one parameter, one can omit the parentheses around the paremeter.
 * As follows:
 */

texBox.addEventListener.("keydown", event => {
	console.log(`You pressed "${event.key}".`);
});
