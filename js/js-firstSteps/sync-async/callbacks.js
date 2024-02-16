#!/usr/bin/node

// In JavaScript, a callback is a function that is passed as an argument to another function and is executed after the completion of an asychronous operation.

/* Simulating an asynchronous operation */
function fetchData(callback) {
  setTimeout(() => {
    const data = 'This is the fetched data!';
    callback(data);
  }, 2000);
}

// Using the callback
console.log('Start');

fetchData(result => {
  console.log(result);
  console.log('End');
});
