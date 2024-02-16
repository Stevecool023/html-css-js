#!/usr/bin/node

const lines = ['C is fun', 'Python is cool', 'JavaScript is amazing'];

for (const line of lines) {
  console.log(line);
}

console.log();

let index = 0;
while (index < lines.length) {
  console.log(lines[index]);
  index++;
}
