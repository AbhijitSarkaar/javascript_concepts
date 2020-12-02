let nums = [1, 2, 3, 4, 5, 6];

Array.prototype.myMap = function (callback) {
	let newArray = [];
	this.forEach((item) => {
		newArray.push(callback(item));
	});
	return newArray;
};

let res = nums.myMap(function (num) {
	return num + 5;
});

console.log(nums, res);
