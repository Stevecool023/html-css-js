#!/usr/bin/node

/*
 * Check if a word is Palindrome;
 * Meaning that it is the same when read backwards
 * Edge case: racecar - same when read from the end
 */

/* isPalindrome is part of a function called string */
String.prototype.isPalindrome = function() {
  // Convert inputed alphabets to lowercase for case insensitive comparison;
  const name = this.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove special characters and spaces

  const halfName = Math.floor(name.length / 2);

  // Check whether the length of the string is an even number.
  if (name.length % 2 === 0) {
    for (let i = 0, j = name.length - 1; i < halfName; i++, j--) {
      // Check if letters from both ends are similar
      if (name[i] !== name[j]) {
        return false;
      }
    }
    // Do a check for an odd number length of string
  } else {
    for (let i = 0, j = name.length - 1; i < halfName; i++, j--) {
      // Check whether the alphabets from back and front are a replica of the other
      if (name[i] !== name[j]) {
        return false;
      }
    }
  }
  return true; // Return true after the entire loop has been checked
};

// Checking the functionality of the code using edge cases.
console.log("abba".isPalindrome());
console.log("racecar".isPalindrome());
console.log("level".isPalindrome());
console.log("abbcbba".isPalindrome());
console.log("A man, a plan, a canal, Panama!".isPalindrome());
console.log("A Santa lived as a devil at NASA".isPalindrome());
console.log("Was it a car or a cat I saw?".isPalindrome()); // Strings with special characters
console.log("dad".isPalindrome());
console.log('stelLeTs'.isPalindrome());
console.log("dude".isPalindrome());
console.log("racer".isPalindrome());
console.log("cane".isPalindrome());
console.log('wrong'.isPalindrome());
console.log("".isPalindrome()); // Empty string
console.log("a".isPalindrome()); // Single character string
console.log("!@#$%^&*()".isPalindrome()); // Strings with special characters
