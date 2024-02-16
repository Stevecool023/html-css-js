#!/usr/bin/node

/*
 * Async/await is a syntactical feature introduced in ECMAScript 2017 (ES8) that simplifies working with Promises.
 * It allows you to write asynchronous code in a more synchronous style, making it easier to understand and maintain.
 */

// Simulating an asynchronous operation with async/await
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

// Using async/await
async function fetchDataAndLog() {
  console.log('Start');
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('End');
  }
}

// Calling the async function
fetchDataAndLog();
