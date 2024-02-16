function comma(strings, ...values) {
	return strings.reduce((prev, next) => {
		let value = values.shift() || [];
		value = value.join(", ");
		return prev + next + value;
	}, "");
}

const snacks = ['apples', 'bananas', 'cherries'];
const output = comma`I like ${snacks} to snack on.`;
console.log(output);
// "I like apples, bananas, cherries to snack on."
