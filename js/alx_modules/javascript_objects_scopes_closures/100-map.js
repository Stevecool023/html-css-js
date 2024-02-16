#!/usr/bin/node
const { list } = require('./100-data.js');

// Using map to return a new list
const newList = list.map((value, i) => value * i);

// log the initial list:
console.log(list);

// log the mapped list:
console.log(newList);
