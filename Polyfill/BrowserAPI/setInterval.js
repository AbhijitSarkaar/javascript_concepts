/**
 * Fundamentals
 *
 * It executes a function in a interval of time duration
 * if delay not given, 0 is used
 * time used is in miliseconds
 * args are arguments passed to the function
 * the return value is a timerId
 *
 */

function myTimer() {
	var timerId = 0;
	var timeMap = {};

	function mySetInterval(callbackFn, delay, ...args) {
		if (typeof callbackFn !== 'function') {
			throw new TypeError("'callback' is not a Function");
		}
		timerId++;

		//delaying part
		function repeat() {
			timeMap[timerId] = setTimeout(() => {
				callbackFn(...args);
				if (timeMap[timerId]) {
					repeat();
				}
			}, delay);
		}
		repeat();
		return timerId;
	}

	function myClearInterval(id) {
		clearTimeout(id);
		delete timeMap[id];
	}

	return { mySetInterval, myClearInterval };
}

const { mySetInterval, myClearInterval } = myTimer();

function display(a, b, c) {
	console.log(a + b + c);
}

let id = mySetInterval(display, 1000, 1, 2, 3);
myClearInterval(id);
