//partial functions are the functions where all the arguments are not passed at a time.
//it's useful to store the intermediate states.

function volume(h) {
	return function (l) {
		return function (w) {
			return h * l * w;
		};
	};
}

//saving intermediate state using height 100 and creating a specialized function which calculates volumes with fixed height 100
let volumeOfHeight100 = volume(100);

console.log(volumeOfHeight100(2)(3));
console.log(volumeOfHeight100(4)(5));
