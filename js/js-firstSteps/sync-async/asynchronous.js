#!/usr/bin/node

/*
 * Non-Blocking Execution
 * Callback Mechanism
 */

/* Example using callbacks */
console.log('Start');

// Asynchronous operation with a callback
calculateAsync(result => {
  console.log(result);
  console.log('End');
});
