/*
    Resource
    1. https://stackoverflow.com/questions/523643/difference-between-and-in-javascript
*/


// == is called equality operator, === is called identity operator
//how type coercion happens for == operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
// for === type coercion does not happen

console.log(1 == '1')
console.log(1 === '1')

let numObj = {
    valueOf() {
        return 1
    }
}

let strObj = {
    valueOf() {
        return '1'
    }
}

//first object's valueOf() method is being used to get the primitive value and then the primitive value again goes into through type coercion
console.log(1 == numObj)
console.log(1 == strObj)
console.log('1' == numObj)
console.log('1' == strObj)
