function highlight(strings, ...values) {
	const interpolation = strings.reduce((prev, current) => {
		return prev + current + (values.length ? "<mark>" + values.shift() + "</mark>" : "");
	}, "");

	return interpolation;
}

const condiment = "jam";
const meal = "toast";

const output = highlight`I like ${condiment} on ${meal}.`;
console.log(output);
// "I like <mark>jam</mark> on <mark>toast</mark>."
