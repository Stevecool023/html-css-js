#!/usr/bin/node

// Arrow functions for the callback functions,
// implementation of the promise chain:

myPromise
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => `${value} and lastly`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });
