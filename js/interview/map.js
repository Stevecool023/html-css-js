#!/usr/bin/node

Array.prototype.myMap = function(cb) {

  // Initialize an empty array to store the results of the callback function
  const result = [];

  // Iterate over each element in the array
  for (let i = 0; i < this.length; i++) {
    // Apply the callback function to the input array
    result.push(cb(this[i], i, this));
  }
};

// Edge cases to check on my code functionality
[1, 2, 3].myMap(console.log);
["a", "b", "c"].myMap(console.log);

const arr1 = [1, 2, 3].myMap(console.log);
const arr2 = ["a", "b", "c"].myMap(console.log);

console.log(arr1);
console.log(arr2);
