#!/usr/bin/base

/* Convert a given number from base 10 into a given base */
function convertToBase(number, base) {
  if (base < 2 || base > 36) {
    return "Invalid base. Base should be between 2 and 36"
  }

  let result = "";

  while (number > 0) {
    let reminder = number % base;
    result = reminder.toString() + result;
    number = Math.floor(number / base);
  }

  return result || "0"; // Return "0" if the result is empty
}

// Example: Convert 10 to binary (base 2)
console.log(convertToBase(10, 2)); // Output: "1010"
