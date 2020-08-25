/*
Resources:
1. https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript
2. https://stackoverflow.com/questions/801032/why-is-null-an-object-and-whats-the-difference-between-null-and-undefined
*/

/*
Concepts
1. null represents no value. It says that something exists but it does not have any value (absence of value)
2. when a variable is not defined with some value, it's value is undefined
3. Both are falsy values. It evaluated to false. Six falsy values null, undefined, '', 0, NaN, false
*/

//null and undefined have two different types

console.log(typeof null) //object (It's a error of javascript)
console.log(typeof undefined) //undefined
