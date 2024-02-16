console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.isSafeInteger(5839.48269));
console.log(Number.isSafeInteger(5840));

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

console.log(+0 === -0);
console.log(342 / +0); // Infinity
console.log(342 / -0); // -Infinity
