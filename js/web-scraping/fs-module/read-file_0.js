#!/usr/bin/node

/* Using 'fs.readFileSync': */
// The 'fs.readFileSync' method is synchronous and returns the file content.

const fs = require('fs');

const filePath = 'example.txt';

try {
  const data = fs.readFileSync(filePath, 'utf8');
  console.log('File content:', data);
} catch (err) {
  console.error('Error reading file:', err);
}
