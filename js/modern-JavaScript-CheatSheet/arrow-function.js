/*
 * Benefits:
 * - more concise
 * - 'this' is picked up from surroundings
 * - implicit return
 */
function double(x) { return x * 2; } // Traditional way // Explicit return here; return keyword is used
console.log(double(2)); // 4

const Double = x => x * 2; // Same function written as an arrow function with implicit return
				// implicit return; no use of the 'return' keyword but still returns x*2.
console.log(Double(2)); // 4
