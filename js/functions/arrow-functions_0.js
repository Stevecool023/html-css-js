/*
 * If a function contains only one line that's a return statement,
 * one can also omit the braces and the return keyword,
 * and implicitly return the expression.
 */
const originals = [1, 2, 3];

const doubled = originals.map(item => item *2);

console.log(doubled); // [2, 4, 6]

/*
 * the equivalent of (item => item * 2); is:
 * function doubledFunction(item) {
 * return item * 2;
 * }
 *
 * or:
 * function (item) {
 * return item * 2;
 * }
 *
 * or:
 * (item) => {
 * return item * 2;
 * }
 *
 * or:
 * item => {
 * return item * 2;
 * }
 *
 * and finally it evolves to:
 * item => item * 2
 */
