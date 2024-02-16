#!/usr/bin/node

const size = process.argv[2];

if (!isNaN(size)) {
  let row = 0;
  while (row < size) {
    let column = 0;
    let line = '';
    while (column < size) {
      line += 'X';
      column++;
    }
    console.log(line);
    row++;
  }
} else {
  console.log('Mising size');
  }
