#!/usr/bin/node

/* Reading and Printing the content of a file. */

// First argument is the file path
// The content of the file must be read in utf-8
// If an error occurred during the reading, print error object.

const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', (error, data) => {
  if (error) {
    console.error('Error reading file:', error)
    return;
  }

  console.log(data);
});
