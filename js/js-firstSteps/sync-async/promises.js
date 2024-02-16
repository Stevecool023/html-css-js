#!/usr/bin/node

/*
 * Promises provide a cleaner and more structured way to handle asynchronous operations compared to callbacks.
 * A promise represents a value that may be available now, or in the future, or never.
 * It has three states: 'pending', 'fulfilled'(resolved), or 'rejected'.
 */

// Simulating an asynchronous operation with a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'This is the fetched data!';
      // Simulating a successful operation
      resolve(data);
      // Simulating an error
      // reject('Error fetching data!');
    }, 2000);
  });
}

// Using the promise
console.log('Start');

fetchData()
  .then(result => {
    console.log(result);
    console.log('End');
  })
  .catch(error => {
    console.errord(error);
  });
