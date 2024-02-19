#!/usr/bin/node

/*
 * a working example to play with:
 * template to create any function returning a promise:
 */

function doSomething() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Other things to do before completion of the promise
      console.log("Did something");
      // The fulfillment value of the promise
      resolve("https://example.com/");
    }, 200);
  });
}
