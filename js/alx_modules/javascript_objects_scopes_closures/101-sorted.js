#!/usr/bin/node

const { dict } = require('./101-data.js');

// Create a new dictionary with user ids grouped by occurrences
const sortedDict = Object.entries(dict).reduce((result, [userId, occurrences]) => {
  if (!result[occurrences]) {
    result[occurrences] = [];
  }
  result[occurrences].push(userId.toString());
  return result;
}, {});

console.log(sortedDict);
