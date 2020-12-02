let nums = [1, 2, 3, 4, 5, 6];

Array.prototype.myFilter = function (callback) {
	let newArray = [];
	this.forEach((item) => {
		if (callback(item)) newArray.push(item);
	});
	return newArray;
};

res = nums.myFilter(function (num) {
	return num % 2 == 0;
});

console.log(nums, res);
