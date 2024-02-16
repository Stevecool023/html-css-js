#!/usr/bin/node

/*
 * Web scraping often involves asynchronous operations, especially when making multiple request or waiting for data to load on the page.
 * Asynchronous handling is crucial to prevent the script from blocking and to ensure smooth execution.
*/

/* Example using Promises: */
const axios = require('axios');

// Function to fetch HTML content asynchronously
async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data: $(error)`);
  }
}

// Example usage
const url = 'https://example.com';
fetchData(url)
  .then(html => {
    console.log(html);
  })
  .catch(error => {
    console.error(error);
  });
