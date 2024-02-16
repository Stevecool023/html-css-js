#!/usr/bin/node

function factorialRecursive(n) {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    return 'Invalid input';
  }

  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

const arg = process.argv[2];
const results = factorialRecursive(parseInt(arg, 10));
console.log(results);
