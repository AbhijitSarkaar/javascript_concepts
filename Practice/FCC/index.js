'use strict';

//1
//Strings are immutable
let str = 'Bob';
// str[0] = 'J';
// console.log(str);
str = 'Job';
// console.log(str); //however assigning str to diff string works

//2
//Array push and pop from front
let arr = [5, 2, 3, 4];

arr.shift();
// console.log(arr);
arr.unshift(1);
// console.log(arr);

//3
//Object.freeze to make a object and it's properties truly immutable
//freeze return the same object that were passed to the function. it does not create a new copy.
//it sets the writable and configurable attributes to false for the object

const CONSTANTS = {
	PI: 3.14,
	g: 9.8,
};

CONSTANTS['g'] = 10; // allowed
Object.freeze(CONSTANTS);
try {
	// CONSTANTS['g'] = 9.8; // not allowed
} catch (err) {
	// console.log(err); //throws an error in strict mode
}
// console.log(CONSTANTS['g']); //property unchanged

//4
//Object.seal to make a object's properties sealed. new properties can't be added and existing ones can't be deleted

const cars = {
	hexa: 'Nice',
	fortunar: 'big',
};

Object.seal(cars);
cars['hexa'] = 'suv'; // not allowed
// console.log(cars.hexa); // can change properties

try {
	//following statements add and delete properties from cars object which is sealed. hence not possible and throws error in strict mode
	// delete cars.hexa;
	// cars['i10'] = 'mini';
} catch (err) {
	// console.log(err); //throws an error in strict mode
}

//5
//rest parameter of function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
//it's a function's last parameter and is prefixed with an spread syntax ...
//rest parameter can only be the last paramter
//it's an Array instance containing all the REMAINING arguments passed to the function
//rest parameters are introduced because earlier arguments object needed to be converted into normal array before iterating through the parameters

const foo = (a, b, ...rest) => {
	// console.log(a);
	// console.log(b);
	// console.log(rest);
};

foo('a', 'b', 'c', 'd', 'e');

//6
//arguments object is an array like structure, contains the value passed to the function
//arguments object only used for non arrow functions. it's a local variable available to the calling function
//it can be converted into real array using Array.from() or spread operator
//for arrow functions, rest parameters are preferred over arguments object

function foo1() {
	// console.log(arguments);
	// console.log(arguments.length);
	// console.log([...arguments]);
}

foo1('a', 'b', 'c');

//7
//spread operator: it's use for expanding the values present in iterable (array, strings etc)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//spread operator is used inside function call, array literal [] and object literal {} where a expandable list of items is expected
//Literal is a fundamental value associated with some expression in javascript.
//Note: array and string can be spread inside object literal but object can not be spread inside a array iteral

let list1 = [1, 2, 3, 4];
let list2 = [5, 6, 7, 8];

// console.log([...list1, ...list2]); //output: [1,2,3,4,5,6,7,8]
// console.log([...list1, ...list2].length); //output: 8
list1.push(...list2);
// console.log(list1); //output: [1,2,3,4,5,6,7,8]

str = 'a/b/c/d/e';
function sum(a, b) {
	return a + b;
}
// console.log(sum(...str)); //output: "a/"
// console.log({ ...str }); //string expanded into a object literal
// {
// 	 '0': 'a',
//   '1': '/',
//   '2': 'b',
//   '3': '/',
//   '4': 'c',
//   '5': '/',
//   '6': 'd',
//   '7': '/',
//   '8': 'e'
// }

let list = [1, 2, 3, 4];
// console.log({ ...list }); //array expanded into a object literal: { '0': 1, '1': 2, '2': 3, '3': 4 }

//Important
let obj = { a: 1, b: 2 };
// console.log([...obj]); //throws error: obj is not iterable

//8
//Destructing assignment
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

//9
//template literals
//multi line strings which is not possible using single and double quotes

str = `asdfasdwwwwww
asdfasdf`;
// console.log(str);

//Inserting numbers into string. string interpolation

str = `Two: ${2}`;
// console.log(str);

//10
//class
//class.js
