#!/usr/bin/node

/* Function that returns the number of occurrences in a list */
function exports() {};
exports.nbOccurences = function (list, searchElement) {
  let counter = 0;
  for (const element of list) {
    if (element === searchElement) {
      counter++;
    }
  }
  return counter;
};

/* Alternatively */
/*
 * exports.nbOccurences = function (list, searchElement) {
 *   // Count the occurrences of searchElement in the list... deploying an array
 *   return list.filter(element => element === searchElement).length;
 * };
 */

module.exports = exports;
