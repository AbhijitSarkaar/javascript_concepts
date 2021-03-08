//Promise class
/**
 * Fundamentals
 *
 * promise is an function. it's instance is used for api requests
 * the callback passed to promise accepts two callbacks resolve and reject
 * it's instance has then and catch properties
 * it has resolve and reject static methods
 * it has hidden properties state ['pending', 'resolved', 'rejected'], onFulfilled [(list of handler functions)], value
 *
 */
//https://dev.to/vijayprwyd/polyfill-for-promises-1f0e

function PromisePolyfill(executor) {
	//resolve a promise
	let onResolve;
	let onReject;
	let fulfilled = false;
	let called = false;
	let value;

	function resolve(val) {
		//once it starts executing, it executes the callback passed to then block
		fulfilled = true;
		value = val;
		if (typeof onResolve === 'function') {
			onResolve(val);
			called = true;
		}
	}

	//reject a promise
	function reject() {}

	this.then = function (callback) {
		onResolve = callback;
		if (fulfilled && !called) {
			called = false;
			value = undefined;
			onResolve(value);
		}
		return this;
	};

	this.catch = function (callback) {
		onReject = callback;
		return this;
	};

	executor(resolve);
}

let p2 = new PromisePolyfill((resolve) => {
	resolve('response');
})
	.then((res) => console.log('Success callback 1: ', res))
	.then((res) => console.log('Success callback 2: ', res));

let p1 = new Promise((resolve) => {
	resolve('response');
})
	.then((res) => console.log('Success callback 1: ', res))
	.then((res) => console.log('Success callback 2: ', res));
