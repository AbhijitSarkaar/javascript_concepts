/**
 * Fundamentals
 *
 * takes an array of promises as input
 * returns a single promise which is an array
 * it returns a rejected promise with the first promise that's rejected with it's rejected message
 *
 */

promiseAllPolyfill = (promises) => {
	let output = [];
	return new Promise((resolve, reject) => {
		promises.forEach((promise) => {
			Promise.resolve(promise)
				.then((result) => {
					output.push(result);
					if (output.length === promises.length) {
						resolve(output);
					}
				})
				.catch((err) => {
					reject(err);
				});
		});
	});
};
promiseAllHandler = () => {
	let p1 = Promise.resolve(1);
	let p2 = 32;
	let p3 = new Promise((res, rej) => {
		setTimeout(() => {
			res('3rd promise response');
		}, 1000);
	});
	let promises = [p1, p2, p3];
	promiseAllPolyfill(promises)
		.then((result) => {
			console.log('Promise all: ', result);
		})
		.catch((err) => {
			console.log(err);
		});
};

promiseAllHandler();
