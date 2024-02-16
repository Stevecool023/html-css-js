#!/usr/bin/node

const callMeMoby = function (x, theFunction) {
  let times = 0;
  while (x > times) {
    theFunction();
    times++;
    }
  };

module.exports = {
  callMeMoby: callMeMoby
}
