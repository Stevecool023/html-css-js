#!/usr/bin/node

// closures-over-modules.js
let x = 5;
export const getX = () => x;
export const setX = (val) => {
  x = val;
};
