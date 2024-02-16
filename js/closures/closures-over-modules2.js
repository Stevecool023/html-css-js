#!/usr/bin/node
import { getX, setX } from "./closures-over-modules.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
