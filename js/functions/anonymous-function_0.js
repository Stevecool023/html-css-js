function logKey(event) {
	console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);


// anonymous function
textBox.addEventListener("keydown", function (event) {
	console.log(`You pressed "${event.key}".`);
});
