/* Spread operator '...' */
function myFunc(x, y, ...params) {
	console.log(x);
	console.log(y);
	console.log(params)
}

myFunc("a", "b", "c", "d", "e", "f")
// "a"
// "b"
// ["c", "d", "e", "f"]
