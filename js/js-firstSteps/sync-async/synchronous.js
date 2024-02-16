#!/usr/bin/node

/*
 * Sequential Execution
 * Blocking Nature
 */

console.log('Start');

// Synchronous operation (blocking)
const result = calculateSync();
console.log(result);

console.log('End');
