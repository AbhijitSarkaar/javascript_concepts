/**
 * Fundamentals
 *
 * async functions return a promise which can be chained
 * await works only inside async functions
 * await works on theneble objects (object withe 'then' property). promise is a theneble object
 * return keyword is to be used to explicitly return a promise. a value returned from async functions returns a resolved promise.
 * if no value is returned then the async function returns a promise with resolved value of undefined
 * if the promise awaited by await keyword do not get settled, then the remaining part of the await function do not get executed
 * the function execution pauses at await statement and resumes when the promise settles. this is not the case if a promise.then is used
 * await keyword returns a promise
 * if the promise handled by await is rejected, then the promise returned by the async function becomes rejected and catch block is executed
 * the rejected promise scenerio is same if a Error is thrown. the function execution will stop and the catch block
 * will be executed once the promise settles
 *
 */
/**
 * Notes
 *
 * error handling
 * usage with multiple promises
 *
 */

//Examples

//Example 1

let p = async function foo() {
	let promise = new Promise((res, rej) => setTimeout(() => res('resolved value'), 1000));
	return await promise;
};

let p1 = p().then((res) => console.log(res));

//Example 2

function getUsers() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([
				{
					name: 'Abhi',
				},
				{
					name: 'Ricky',
				},
			]);
		}, 1000);
	});
}

async function foo() {
	let response = await getUsers();
	console.log('Response:', response);
}

foo();

//Example 3

async function abc() {
	let a = await new Promise((resolve, reject) => {
		setTimeout(() => {
			// resolve('inside setTimeout'); //it settles the promise, so subsequent statements do get executed
			console.log('inside setTimeout'); //it does not settle the promise, so the statements after the await statement do not get executed
		}, 1000);
	});
	console.log('inside abc');
	return a;
}
abc().then((res) => console.log('result', res));
console.log('outside abc');

//Example 4

async function abc() {
	return await 1;
}

abc(); //returns a promise object with resolved value 1

//Output
//Promise object with resolved value of 1

//Example 5

async function abc() {
	console.log('inside abc 1');
	let p = await new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Inside setTimeout');
			resolve('response');
		}, 1000);
	});
	console.log('inside abc 2');
	return p;
}

abc().then((p) => console.log(p));
console.log('outside abc');

//Output
// "inside abc 1"
// "outside abc"
//After 1 second
// "Inside setTimeout"
// "inside abc 2"
// "response"

//Example 6

async function abc() {
	console.log('inside abc 1');
	let p = new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Inside setTimeout 1');
			resolve('response');
		}, 1000);
	});
	console.log('inside abc 2');
	return p;
}

abc().then((p) => console.log(p));
console.log('outside abc');

//Output
// "inside abc 1"
// "inside abc 2"
// "outside abc"
//After 1 second
// "Inside setTimeout 1"
// "response"

//Example 7
//Not returning anything from async function, sends undefined in success callback

async function abc() {
	console.log('inside abc 1');
	await new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Inside setTimeout 1');
			resolve('response');
		}, 1000);
	});
	console.log('inside abc 2');
}

let promise = abc();
promise.then((p) => console.log('Success', p)).catch((err) => console.log('Error', err));
console.log('outside abc');

//Output
// "inside abc 1"
// "outside abc"
// "Inside setTimeout 1"
// "inside abc 2"
// "Success", undefined

//Error handling
//Example 1
//throw Error returns a rejected promise in the abc() call and catch block handles the promise with value returned from the throw statement

async function abc() {
	console.log('inside abc 1');
	throw new Error('response');
	console.log('inside abc 2');
}

let promise = abc();
promise.then((p) => console.log('Success', p)).catch((err) => console.log('Catch handling Error', err));
console.log('outside abc');

//Output
// "inside abc 1"
// "outside abc"
// "Catch handling Error", 'Error object'

//Example 2

async function abc() {
	console.log('inside abc 1');
	await Promise.reject('Response');
	await Promise.resolve('Response'); // Does not get executed as function execution stops when promise is rejected
	console.log('inside abc 2');
}

let promise = abc();
promise.then((p) => console.log('Success', p)).catch((err) => console.log('Catch handling Error', err));
console.log('outside abc');

//Output
// "inside abc 1"
// "outside abc"
// "Catch handling Error", "Response"

//Multiple promises

//Example 1

let promises = [
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Promise 1 resolved');
		}, 1000);
	}),
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Promise 2 resolved');
		}, 2000);
	}),
];

async function abc() {
	let promise = await Promise.all(promises);
	console.log('Inside abc 2');
	return promise;
}

abc()
	.then((res) => console.log('Success callback', res))
	.catch((err) => console.log('Error calback', err));

//Output
// "Inside abc 2"
// "Success callback", ["Promise 1 resolved", "Promise 2 resolved"]"

//Example 2
//error handling in multiple promises

let promises = [
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Promise 1 resolved');
		}, 1000);
	}),
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Promise 2 resolved');
		}, 2000);
	}),
	new Promise((resolve, reject) => {
		setTimeout(() => {
			reject('Promise 3 rejected');
		}, 2000);
	}),
];

async function abc() {
	let promise = await Promise.all(promises);
	console.log('Inside abc 2');
	return promise;
}

abc()
	.then((res) => console.log('Success callback', res))
	.catch((err) => console.log('Error callback', err));

//Output
//"Error callback", "Promise 3 rejected"
