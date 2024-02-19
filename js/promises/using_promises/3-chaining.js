#!/usr/bin/node

doSomething()
.then(function (result) {
  return doSomethingElse(result);
})
.then(function (newResult) {
  return doThirdThing(newResult);
})
.then(function (finalResult) {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);

// Expressing the above with arrow functions
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);

/*
 * Implicit return in arrow functions
 * () => x
 * is short for:
 * () => { return x; }
 */
