/*
    Resource
    1. https://stackoverflow.com/questions/523643/difference-between-and-in-javascript
*/

//Operators
//== and ===
// == is called equality operator, === is called identity operator
//how type coercion happens for == operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
// for === type coercion does not happen
//string => number coversion happen for string number comparison

// > and <
//if one of the operands is NaN, then the expression returns a falsy value

console.log(1 == '1');
console.log(1 === '1');

let numObj = {
	valueOf() {
		return 1;
	},
};

let strObj = {
	valueOf() {
		return '1';
	},
};

//first object's valueOf() method is being used to get the primitive value and then the primitive value (string) again goes into through type coercion (into number)
//Number(Object.valueOf().toString())

console.log(1 == numObj);
console.log(1 == strObj);
console.log('1' == numObj);
console.log('1' == strObj);

//2: comparison operator(<,>, <=,>=)

console.log(1 < 2 < 3); //is 1 < 2 => true => 1 => 1 < 3 => true
console.log(3 > 2 >= 1);
console.log(1 < 'r'); //false
console.log('r' < 1); //false

//3: addition operator(+)

console.log(1 + '1'); //11
console.log(true + false); //1 + 0 = 1
console.log('true' + false); //truefalse
console.log([1, 2] + [2, 3]); //1,22,3. + is not defined for arrays. converts array into strings and concatenates it.

//4: subtraction operator (-)
console.log(1 - '1'); //1 - 1 = 0. strings are converted into numbers
console.log(1 - 'string'); //NaN
