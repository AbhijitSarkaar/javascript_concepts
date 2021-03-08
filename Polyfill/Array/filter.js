/**
 * Fundamentals
 *
 * it's a pure function
 * it returns a new array
 * it inserts a item into the resultant array if certain condition is correct
 *
 */

let arr = [1, 2, 3, 4];

//Example

let filteredArray = arr.filter((item) => item % 2 == 0);
console.log(filteredArray);
console.log(arr);

//Polyfill

Array.prototype.myFilter = function (callback) {
	let output = [];
	this.forEach((item) => {
		if (callback(item)) {
			output.push(item);
		}
	});
	return output;
};

filteredArray = arr.myFilter((item) => item % 2 == 0);
console.log(filteredArray);
console.log(arr);
