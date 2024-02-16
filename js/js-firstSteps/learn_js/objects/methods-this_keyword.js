/*
 * Objects can also contain methods, which are functions associated with the object.
 * Object methods and "this" keyword.
 */
let calculator = {
	num1: 5,
	num2: 3,
	add: function() {
		return this.num1 + this.num2;
	},
	multiply: function() {
		return this.num1 * this.num2;
	}
};

console.log(calculator.add()); // Method invocation: 8
console.log(calculator.multiply()); // Method invocation: 15
