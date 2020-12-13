//it returns undefined
//it does not mutate the original array
//it does not call the callback in case the item is uninitialized or not present/deleted

//the definition if used a arrow function does not work because of arrow function and this scope => Need to read more on this

let list = [1, 2, 3, 4];

Array.prototype.myForEach = function (callback) {
	for (let i = 0; i < this.length; ++i) {
		callback(this[i], i, this);
	}
};

// list.forEach(callback);

forEachCallback = (item, i, [...rest]) => {
	console.log(item, i, rest);
};

list.myForEach(forEachCallback);

// console.log(list);
