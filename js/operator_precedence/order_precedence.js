function A() { console.log('called A'); return false; }
function B() { console.log('called B'); return false; }
function C() { console.log('called C'); return true; }

console.log(C() || B() && A());
// logs:
// called C
// true

console.log(A() && C() || B());
// logs:
// called A
// called B
// false
