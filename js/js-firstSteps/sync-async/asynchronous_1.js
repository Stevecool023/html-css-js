#!/usr/bin/node

/* Asychronous operations */
/* Example using Async/Await: */

console.log('Start');

// Asynchronous operation with async/await
async function performAsyncOperation() {
  const result = await calculateAsync();
  console.log(result);
  console.log('End');
}

performAsyncOperation();
