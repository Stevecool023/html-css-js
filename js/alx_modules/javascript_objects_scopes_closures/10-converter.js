#!/usr/bin/node

exports.converter = function (base) {
  return function (number) {
    if (number === 0) {
      return "";
    } else {
      const remainder = number % base;
      return exports.converter(base)(Math.floor(number / base)) + (remainder < 10 ? remainder : String.fromCharCode('A'.charCodeAt(0) + remainder - 10));
    }
  };
};

module.exports = exports;
