#!/usr/bin/node

/* Using 'fs.writeFile': */
// The 'fs.writeFile' method is asynchronous and writes data to a file.
// If the file already exists, it will be overwritten.

const fs = require('fs');

const filePath = 'example.txt';
const contentToWrite = 'Hello, this is some content!';

fs.writeFile(filePath, contentToWrite, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }

  console.log('File written successfully.');
});
