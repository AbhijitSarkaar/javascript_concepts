/**
 * Fundamentals
 *
 * forEach returns undefined
 * it's a pure function
 *
 */

let arr = [1, 2, 3, 4, 5];

//Example
arr.forEach((a) => console.log(a * 2));

//Polyfill
Array.prototype.myForEach = function (callback) {
	for (let i = 0; i < this.length; ++i) {
		callback(this[i]);
	}
};

arr.myForEach((a) => console.log(a * 2));
