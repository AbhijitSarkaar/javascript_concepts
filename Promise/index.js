/**
 * Observations
 *
 * If the parent promise returns a pending promise, then returns a pending promise even if a resolved or rejected promise is returned
 * The promise must be resolved/rejected before then method
 */

//1
//pending promise
//takes two callbacks. does not return anything
//state: pending
//result: undefined

let p = new Promise(function (resolve, reject) {});

//2
//resolved promise
//takes two callbacks. does not return anything
//state: fulfilled
//result: parameters from resolve callback function

p = new Promise(function (resolve, reject) {
	resolve('resolved without return');
});

//3
//resolved promise
//takes two callbacks. returns resolve function
//state: fulfilled
//result: parameters from resolve callback function

p = new Promise(function (resolve, reject) {
	return resolve('resolved with return');
});

//4
//then method
//returns a fulfilled promise with value undefined

p = new Promise(function (resolve, reject) {
	resolve('resolved without return');
}).then(
	() => {},
	(res) => {}
);
