#!/usr/bin/node

/*
 * Return a single array when given an array of arrays
 */

Array.prototype.flatten = function() {
  
  // First define an empty array to store result of the function array
  const result = [];

  // Define a function that recursively checks for array within an array at any level
  const flattenRecursive = (arr) => {
    // Iterate over the input
    for (let i = 0; i < arr.length; i++) {
      // Handle array within an array
      if (Array.isArray(arr[i])) {
        flattenRecursive(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
  };

  flattenRecursive(this); // Start flattening the array

  // Finally return flattened array after the whole loop is executed
  return result;
};

// Edge cases to test code functionality
console.log([].flatten());
console.log([1, 2, 3].flatten());
console.log([[1, 2], 3, 4].flatten());
console.log([[1, 2], [3, [4, 5]], 6].flatten());
