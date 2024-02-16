#!/usr/bin/node

class Base {
  baseGetX() {
    return 1;
  }
}

class Extended extends Base {
  getX() {
    return super.baseGetX();
  }
}

const e = new Extended();
console.log(e.getX()); // 1
const { getX } =  e;
console.log(getX()); // 1
