#!/usr/bin/node

/*
 * Polyfilling: In environments that don't support 'Object.setPrototypeOf' or 'Object.getPrototypeOf'
 * (or situations where you want to ensure compatibility),
 * one can create polyfills using these methods
 */

if (!Object.setPrototypeOf) {
  Object.setPrototypeOf = function(obj, proto) {
    obj.__proto__ = proto;
    return obj;
  }
}
