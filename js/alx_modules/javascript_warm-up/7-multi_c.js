#!/usr/bin/node

const factor = process.argv[2];

if (!isNaN(factor)) {
  let iteration = 0;
  while (iteration < factor) {
    console.log('C is fun');
    iteration++;
  }
} else {
  console.log('Missing number of occurrences');
  }

console.log();

if (!isNaN(factor)) {
  for (let iteration = 0; iteration < factor; iteration++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
  }
