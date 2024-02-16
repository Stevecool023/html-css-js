function f() {
	try {
		console.log(0);
		throw "bogus";
	} catch (e) {
		console.log(1);
		// This return statement is suspended
		// until finally block has completed
		return true;
		console.log(2); // not reachable
	} finally {
		console.log(3);
		return false; // overwrites the previous "return"
		console.log(4); // not reachable
	}
	// "return false" is executed now
	console.log(5); // not reachable
}
console.log(f()); // 0, 1, 3, false
