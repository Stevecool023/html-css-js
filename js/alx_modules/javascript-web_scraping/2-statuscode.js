#!/usr/bin/node

/* Script that display the status code of a GET request. */

// The first argument is the URL to request (GET)
// The status code must be printed like this: code: <status code>
// Must use the module request

const request = require('request');

const url = process.argv[2];

if (!url) {
  console.error('Usage: node 2-statuscode.js <URL>');
  process.exit(1);
}

// Performing a GET request.
request.get(url, (error, response) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    // Displaying the status code
    console.log(`code: ${response.statusCode}`);
  }
});
