//it does not mutate the original array

let ages = [
	{ name: 'Mark', age: 21 },
	{ name: 'Jane', age: 21 },
	{ name: 'David', age: 23 },
	{ name: 'Roy', age: 34 },
	{ name: 'Jim', age: 27 },
];

let callback = (acc, item) => {
	acc[item.name] = item.age;
	return acc;
};

Array.prototype.myReduce = function (callback, initialValue) {
	let accumulator = initialValue;
	for (let i = 0; i < this.length; ++i) {
		if (accumulator === undefined) {
			accumulator = this[i];
		} else {
			accumulator = callback(accumulator, this[i]);
		}
	}
	return accumulator;
};

let age1 = ages.myReduce(callback, {});
let age2 = ages.reduce(callback, {});

console.log(age1);
console.log(age2);
console.log(ages);
