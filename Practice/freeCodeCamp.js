'use strict';

//1. Strings are immutable
let str = 'Bob';
// str[0] = 'J';
// console.log(str);
str = 'Job';
// console.log(str); //however assigning str to diff string works

//2. Array push and pop from front
let arr = [5, 2, 3, 4];

arr.shift();
// console.log(arr);
arr.unshift(1);
// console.log(arr);

//3. Object.freeze to make a object and it's properties truly immutable
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

//4. Object.seal to make a object's properties sealed. new properties can't be added and existing ones can't be deleted

const cars = {
	hexa: 'Nice',
	fortunar: 'big',
};

Object.seal(cars);
cars['hexa'] = 'suv'; // not allowed
// console.log(cars.hexa); // can change properties

try {
	//following statements add and delete properties from cars object which is sealed. hence not possible and throws error in strict mode
	delete cars.hexa;
	cars['i10'] = 'mini';
} catch (err) {
	// console.log(err); //throws an error in strict mode
}

//rest parameter of function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
//it's a function's last parameter and is prefixed with an spread syntax ...
//rest parameter can only be the last paramter
//it's an Array instance containing all the REMAINING arguments passed to the function
//rest parameters are introduced because earlier arguments object needed to be converted into normal array before iterating through the parameters

function foo(a, b, ...rest) {
	console.log(a);
	console.log(b);
	console.log(rest);
}

foo('a', 'b', 'c', 'd', 'e');
