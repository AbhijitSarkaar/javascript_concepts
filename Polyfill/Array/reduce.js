/**
 * Fundamentals
 *
 * this method is used to reduce the array into single value. An object/array/string/number
 * reduce takes two arguments 1. the callback function 2. the initial value of the accumulator
 * the callback function takes 4 arguments 1. accumulator 2. current element 3. current index 4. the array
 * if initial accumulator value is not passed then the first element is taken as the accumulator initial value
 * the accumulator takes the return value of the callback function from previous iteration
 *
 */

var persons = [
	{
		name: 'John',
		age: 23,
	},
	{
		name: 'Mike',
		age: 25,
	},
	{
		name: 'Jill',
		age: 21,
	},
];

var result = persons.reduce((acc, item) => {
	acc[item.name] = item.age;
	return acc;
}, {});

Array.prototype.myReduce = function (callback, initializer) {
	var initial = initializer;
	if (!initial) initial = this[0];
	this.forEach((item) => {
		initial = callback(initial, item);
	});
	return initial;
};

result = persons.myReduce((acc, item) => {
	acc[item.name] = item.age;
	return acc;
}, {});

console.log(result);
