#!/usr/bin/node

/* Asynchronous operations */
/* Example using promises */

console.log('Start');

// Asynchronous operations with a Promise
calculateAsync()
  .then(result => {
    console.log(result);
    console.log('End');
  });
