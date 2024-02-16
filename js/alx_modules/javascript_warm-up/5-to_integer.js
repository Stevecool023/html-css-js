#!/usr/bin/node

const argument = process.argv[2];

if (!isNaN(argument)) {
  console.log(`My number: ${parseInt(argument, 10)}`);
} else {
  console.log("Not a number");
}
