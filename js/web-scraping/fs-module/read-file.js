#!/usr/bin/node

/* Using 'fs.readFile': */
// The fs.readFile method is asynchronous and reads the entire contents of a file.

const fs = require('fs');

const filePath = 'example.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  console.log('File content:', data);
});
