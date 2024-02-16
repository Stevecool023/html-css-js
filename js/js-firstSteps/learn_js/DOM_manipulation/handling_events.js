/*
 * Handling Events
 * JavaScript can respond to user actions using events listeners.
 */

let button = document.getElementById("myButton");

button.addEventListener("click", function() {
	console.log("Button clicked!");
});
