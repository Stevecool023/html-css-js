function myFunc() {
	this.myVar = 0;
	setTimeout(() => {
		this.myVar++;
		console.log(this.myVar) // 1
	}, 0);
}
myFunc();
