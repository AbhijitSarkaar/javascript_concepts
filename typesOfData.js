/* 
5 primitive types of data
number, string, boolean, null, undefined, NaN
primitive values are immutable
typeof operator
ascii values
type conversion, how does it happen
*/

//numbers

let number = 1

//string

let string = "word"

//boolean

let booleanTrue = true
let booleanFalse = false

//null

let nullValue = null

//undefined

let undefinedValue = undefined

//ascii values

// console.log(string.charCodeAt(2))

//type conversion

//conversion to string
// let numToStr = String(number)
// let booleanToStr = String(booleanTrue)
// let undefinedToStr = String(undefinedValue)
// let nullToStr = String(nullValue)

// console.log("number to string: ", numToStr, typeof numToStr)
// console.log("undefined to string: ", undefinedToStr, typeof undefinedToStr)
// console.log("boolean to string: ", booleanToStr, typeof booleanToStr)
// console.log("null to string: ", nullToStr, typeof nullToStr)

//conversion to number
let strToNum = Number(string)
// let booleanToStr = Number(booleanTrue)
// let undefinedToStr = Number(undefinedValue)
// let nullToStr = Number(nullValue)

console.log("number to number: ", strToNum, typeof strToNum)
// console.log("undefined to number: ", undefinedToStr, typeof undefinedToStr)
// console.log("boolean to number: ", booleanToStr, typeof booleanToStr)
// console.log("null to number: ", nullToStr, typeof nullToStr)

