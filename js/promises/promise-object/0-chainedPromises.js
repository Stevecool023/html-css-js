#!/usr/bin/node

/* Each '.then()' returns a newly generated promise object,
 * which can be optionally be used for chaining */

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise
.then(handleFulfilledA, handleRejectedA)
.then(handleFulfilledB, handleRejectedB)
.then(handleFulfilledC, handleRejectedC);
