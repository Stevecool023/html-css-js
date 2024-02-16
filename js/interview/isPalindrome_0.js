#!/usr/bin/node

/*
 * Check if word is a Palindrome
 * It can be read backwards as front-word.
 */

String.prototype.isPalindrome = function() {
  // Change everything to lowercase in order to have a case insensitive check
  const name = this.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Define a revesed array array of the name input
  const reversedName = name.split("").reverse().join("");

  // Check whether reversedName is similar to name
  return reversedName === name;
}

console.log("racecar".isPalindrome());
console.log("level".isPalindrome());
console.log("abbcbba".isPalindrome());
console.log("A man, a plan, a canal, panama!".isPalindrome());
console.log("Was it a car or a cat I saw?".isPalindrome());
console.log("abba".isPalindrome());
console.log("dad".isPalindrome());
console.log("mom".isPalindrome());
console.log("racer".isPalindrome());
console.log('dude'.isPalindrome());
console.log("".isPalindrome()); // An empty string
console.log("a".isPalindrome()); // A single character
