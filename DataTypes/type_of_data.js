/* 
Concepts

1. 6 primitive types of data: number, string, boolean, null, undefined, symbols
2. primitive values are immutable: https://developer.mozilla.org/en-US/docs/Glossary/Primitive#Primitive_wrapper_objects_in_JavaScript
3. primitive data types represents a value, it does not have any properties
4. typeof operator
5. ascii values
6. type conversion (coercion), how does it happen
7. symbols: https://www.freecodecamp.org/news/how-did-i-miss-javascript-symbols-c1f1c0e1874a/
*/

//numbers

let number = 1;

//string

let string = 'word';

//boolean

let booleanTrue = true;
let booleanFalse = false;

//null

let nullValue = null;

//undefined

let undefinedValue = undefined;

//ascii values

// console.log(string.charCodeAt(2))

//type conversion

//conversion to string
let numToStr = String(number);
// let booleanToStr = String(booleanTrue)
// let undefinedToStr = String(undefinedValue)
// let nullToStr = String(nullValue)

console.log('number to string: ', numToStr, typeof numToStr);
// console.log("undefined to string: ", undefinedToStr, typeof undefinedToStr)
// console.log("boolean to string: ", booleanToStr, typeof booleanToStr)
// console.log("null to string: ", nullToStr, typeof nullToStr)

//conversion to number
//Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
let strToNum = Number(string);
// let undefinedToNum = Number(undefinedValue)
// let booleanToNum = Number(booleanTrue)
// let nullToNum = Number(nullValue)

console.log('string to number: ', strToNum, typeof strToNum);
// console.log("undefined to number: ", undefinedToNum, typeof undefinedToNum)
// console.log("boolean to number: ", booleanToNum, typeof booleanToNum)
// console.log("null to number: ", nullToNum, typeof nullToNum)
