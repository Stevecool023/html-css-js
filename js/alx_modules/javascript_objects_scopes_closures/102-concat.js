#!/usr/bin/node

const fs = require('fs');

// Get the paths of files from the command line arguments
const firstFile = process.argv[2];
const secondFile = process.argv[3];
const outputFile = process.argv[4];

// Read contents from the source files
const firstFileContent = fs.readFileSync(firstFile, 'utf-8');
const secondFileContent = fs.readFileSync(secondFile, 'utf-8');

// Concatenate contents
const concatenatedContent = firstFileContent + secondFileContent;

// Write the concatenated content to the destination file
fs.writeFileSync(outputFile, concatenatedContent);

console.log(`Contents of ${firstFile} and ${secondFile} concatenated and saved to ${outputFile}`);
