function myFunc(x = 10) {
	return x;
}
console.log(myFunc()); // 10 -- no value is provided so x default value 10 is assigned to x in myFunc
console.log(myFunc(5)); // 5 -- a value is provided so x is equal to 5 in myFunc

console.log(myFunc(undefined)) // 10 -- undefined value is provided so default value is assigned to x
console.log(myFunc(null)); // null -- a value (null) is provided.
