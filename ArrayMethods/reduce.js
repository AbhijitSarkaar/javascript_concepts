//this method is used to reduce the array into single value. An object/array/string/number
//reduce takes two arguments 1. the callback function 2. the initial value of the accumulator
//the callback function takes 4 arguments 1. accumulator 2. current element 3. current index 4. the array
//if initial accumulator value is not passed then the first element is taken as the accumulator initial value
//the accumulator takes the return value of the callback function from previous iteration

//1. Get sum of a list of numbers
let nums = [1, 2, 3, 4, 5];

let sum = nums.reduce((acc, item) => {
	return acc + item;
}, 0);

console.log(sum);

//2. Get total marks of a student
let marks = {
	math: 75,
	english: 84,
	alternative_english: 87,
	physics: 81,
	chemistry: 83,
};

sum = Object.entries(marks).reduce((acc, item) => {
	return acc + item[1];
}, 0);

console.log(sum);

//3. convert a list of age info into a object where the name: age key value pair exists

let ages = [
	{ name: 'Mark', age: 21 },
	{ name: 'Jane', age: 21 },
	{ name: 'David', age: 23 },
	{ name: 'Roy', age: 34 },
	{ name: 'Jim', age: 27 },
];

let age = ages.reduce((acc, item) => {
	acc[item.name] = item.age;
	return acc;
}, {});

console.log(age);

//4. Empty input

console.log([].reduce((acc, item) => {}, 0)); //0
console.log([].reduce((acc, item) => {})); //TypeError: Reduce of empty array with no initial value
