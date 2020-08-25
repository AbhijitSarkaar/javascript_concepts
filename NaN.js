/*
Resources
1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
2. https://dmitripavlutin.com/nan-in-javascript/
*/

/*
    Concepts
    1. number type contains int and float value
    2. number type also contains two other values, infinity(greater than all numbers) and NaN(Not-A-Number)
    3. The typeof infinity and typeof NaN is number
    4. NaN represents that it's not a legal number
    5. can use isNaN() function to check if it's a NaN value or not
    6. NaN is a property of the global object. In other words, it is a variable in global scope
*/

//The typeof infinity and typeof NaN is number
console.log(typeof Infinity, typeof NaN)

//NaN does not equate to itself
console.log(NaN === NaN)

//isNaN() checks the parameter after converting to number will be NaN or not
console.log(isNaN(123))
console.log(isNaN("opop"))