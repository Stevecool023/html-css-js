/* Multiplication has a higher precedence than addition */
console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order

const a = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144
const b = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...

const c = (4 ** 3) ** 2;
const d = 4 / (3 / 2);

console.log(a);
console.log(b);
console.log(c);
console.log(d);

const e = 2 ** 3 / 3 ** 2;
const f = (2 ** 3) / (3 ** 2);

console.log(e);
console.log(f);
