/**
 * Fundamentals
 *
 * It returns a promise that resolves after all the promises settles
 * it returns an array structure. e.g [{status: 'fulfilled', value: 23}]
 *
 */

//Example

let p1 = Promise.resolve(1);
let p2 = 23;
let p3 = new Promise((res, rej) => {
	res(34);
});
let p4 = Promise.reject(14);
Promise.allSettled([p1, p2, p3, p4]).then((res) => console.log(res));

//Output
// [{
//     status: "fulfilled",
//     value: 1
//   }, {
//     status: "fulfilled",
//     value: 23
//   }, {
//     status: "fulfilled",
//     value: 34
//   }, {
//     reason: 14,
//     status: "rejected"
//   }]

//Polyfill
//https://jsfiddle.net/rdh2m38k/90/

let p1 = Promise.resolve(1);
let p2 = 23;
let p3 = new Promise((res, rej) => {
	res(34);
});
let p4 = Promise.reject(14);

let promises = [p1, p2, p3, p4];

function promiseAllSettledPolyfill(promises) {
	let output = promises.map((promise) => {
		return Promise.resolve(promise)
			.then((value) => ({ status: 'fulfilled', value }))
			.catch((reason) => ({ status: 'rejected', reason }));
	});
	return Promise.all(output);
}
promiseAllSettledPolyfill(promises)
	.then((res) => console.log('Polyfill result: ', res))
	.catch((err) => console.log('Polyfill error: ', err));
