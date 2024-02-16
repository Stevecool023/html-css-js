#!/usr/bin/node

/* Using 'fs.writeFileSync': */
// The 'fs.writeFileSync' method is synchronous and writes data to a file.
// Like 'writeFile', it will overwrite the file if it already exists.

const fs = require('fs');

const filePath = 'example.txt'
const contentToWrite = 'Hello, this is another content!';

try {
  fs.writeFileSync(filePath, contentToWrite, 'utf8');
  console.log('File written successfully.');
} catch (err) {
  console.error('Error writing to file:', err);
}
