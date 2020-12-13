//map does not mutate the array it's called upon. But the callback function may do so as shown in the following example
//if thisArg is provided with callback function, it's used as this value in the callback function

let list = [1, 2, 3, 4, 5, 6];

let newList = list.map(
	function (num, index, argList) {
		// argList[index] += 1; //changes the original array
		console.log(this, 'callback function this value');
		return num + 5;
	},
	{ a: 4 } // thisArg can be accessed in the callback function implementation as "this" value
);

// console.log(list);
// console.log(newList);
