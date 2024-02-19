#!/usr/bin/node

/* promise chain */
/* the 'then()' function returns a new promise, different from the original: */

const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
