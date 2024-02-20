#!/usr/bin/node

const myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful,
  // and reject(...) when it failed.
  // setTimeout is used in this example to simulate async code.
  // In reality, XHR or HTML API are prolly used.
  setTimeout(() => {
    resolve("Success!");
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage is whatever  that is passed in the resolve(...) function above.
  console.log(`Yay! ${successMessage}`);
});
