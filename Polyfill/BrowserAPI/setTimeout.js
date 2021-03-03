/**
 * Fundamentals
 *
 * it starts a timer to execute a function after a specific time
 * setTimeout(callback, delay, args)
 * if delay not given, 0 is used
 * time used is in miliseconds
 * args are arguments passed to the function
 * the return value is a timerId
 *
 */

function myTimer() {
	var timerId = 0;
	var timeMap = {};

	function mySetTimeout(callbackFn, delay, ...args) {
		if (typeof callbackFn !== 'function') {
			throw new TypeError("'callback' is not a Function");
		}
		timerId++;
		timeMap[timerId] = true;

		//delaying part
		var curTime = Date.now();
		console.log(timeMap);
		while (curTime + delay > Date.now()) {}

		//if id not cleared
		if (timeMap[timerId]) callbackFn(...args);

		return timerId;
	}

	function myClearTimeout(id) {
		delete timeMap[id];
	}

	return { mySetTimeout, myClearTimeout };
}

const { mySetTimeout, myClearTimeout } = myTimer();

function display(a, b, c) {
	console.log(a + b + c);
}

const timerId1 = mySetTimeout(display, 1000, 1, 2, 3);
myClearTimeout(timerId1);
const timerId2 = mySetTimeout(display, 1000, 1, 2, 3);
