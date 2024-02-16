console.log(myVar) // undefined -- no error raised
var myVar = 2;

/*
 * The above code is understood at execution as follows:
 * var myVar;
 * console.log(myVar) // undefined -- no error raised
 * myVar = 2;
 */

/*
 * for let and const, variables are not accessed before being assigned:
 * console.log(myVar) // raises a ReferenceError
 * let myVar = 2;
 */
