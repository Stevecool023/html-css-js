#!/usr/bin/node

/*
 * A '.catch()' is really just a '.then()' without a slot for a callback function for the case when the promise is fulfilled.
 */

myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
