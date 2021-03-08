/**
 * Fundamentals
 *
 * map takes a callback as an argument and returns a new array
 * map is a pure function. it does not change the array on which it's applied
 * the callback accepts the value, index and the array itself as arguments
 */

let arr = [1, 2, 3, 4, 5];

//Example
let mappedArr = arr.map((a) => a * 2);
console.log(mappedArr);
console.log(arr);

//Polyfill
Array.prototype.myMap = function (callback) {
	let newArray = [];
	this.forEach((item) => {
		newArray.push(callback(item));
	});
	return newArray;
};

mappedArr = arr.myMap((a) => a * 2);
console.log(mappedArr);
console.log(arr);
