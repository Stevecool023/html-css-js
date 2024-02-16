#!/usr/bin/node

/* Script that gets the contents of a webpage and stores it in a file. */

// The first argument is the URL to request
// The second argument is the file path to store the body response
// The file must be UTF-8 encoded
// Must use the module request

const request = require('request');
const fs = require('fs');

const pageUrl = process.argv[2];
const storageFile = process.argv[3];

if (!pageUrl || !storageFile) {
  console.error('Usage: node 5-request_store.js <page URL> <storage file>!');
}

// Perform a GET Request.
request.get(pageUrl, 'UTF-8', (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    // Write the data on the page into a file
    fs.writeFile(storageFile, body, 'utf-8', err => {
      if (err) {
        console.error('Error writing file:', err.message);
      }
    });
  }
})
