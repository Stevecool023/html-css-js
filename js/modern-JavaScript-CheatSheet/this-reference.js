function myFunc() {
	this.myVar = 0;
	var that = this; // that = this trick
	setTimeout(
		function() { // A new 'this' is created in this function scope
			that.myVar++;
			console.log(that.myVar) // 1

			console.log(this.myVar) // undefined -- see function declaration above
		},
		0
	);
}
myFunc();
