let nums = [1, 2, 3, 4, 5, 6];

Array.prototype.myMap = function (callback, thisArg) {
	let newArray = [];
	console.log(thisArg, 'map function this');
	this.forEach((item, index) => {
		newArray.push(callback(item));
	});
	return newArray;
};

let res = nums.myMap(
	function (num) {
		return num + 5;
	},
	{ a: 3 }
);

console.log(nums, res);
