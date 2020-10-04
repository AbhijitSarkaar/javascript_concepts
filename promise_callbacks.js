/*

Concepts

1. promise, some brief intro, promise object (resolve, reject)
    https://javascript.info/promise-basics
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

    1. promise is an object. It represents the results of eventual completion of asynchronous operation
    2. promise can be in three states, pending, fullfilled, rejected
    3. resolve method is called when the async operation was successfull
    4. reject method is called when the async operation failed

    2. promise chain (then, catch, finally)
    https://javascript.info/promise-chaining
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

    1. then() method takes up to two arguments: callback functions for the success and failure. each call back function takes corresponding
    fullfilled value or the rejected value
    2. then() returns a promise (resolved/rejected). 
    When a value is simply returned from within a then handler, it will effectively return Promise.resolve(<value returned by whichever handler was called>).
    3. promise chaining is achieved by returning promise from then() method. the subsequent then methods receive the promise value from previous then methods
    the subsequent then() methods wait for the promise to get resolved or rejected
    4. catch is used for catching the rejected promise. catch returns a promise which can be chained
    5. finally is called when the promise is settled (resolved or rejected)
    6. then() returns rejected promise in two cases, if it throws an error, or if it returns Promise.reject()
    if then returns a rejected promise, the subsequent then method's second (reject) callback function will be called
    7. then takes two callback functions fulfillled and unFulfillled. any one is called based on previous returned promise's state

3. promise apis
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

4. async await
    https://javascript.info/async-await
    https://dev.to/gafi/7-reasons-to-always-use-async-await-over-plain-promises-tutorial-4ej9?ref=hackernoon.com
    https://www.freecodecamp.org/news/async-await-and-promises/

5. try catch
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
	https://javascript.info/try-catch

	1. it's used for checking if a code segment has errors

*/

//Example of promise chain
//Output if setTimeout is disabled in second then
/*
First
Second
1Foobar
(after 1 second) 
2Foobarbaz
3Foobarbaz
*/
//Output if setTimeout is enabled in second then
/*
First
Second
1Foobar
3Foobar
(after 1 second) 
2Foobarbaz 
*/

/*
console.log('First');
Promise.resolve('Foo')
	.then((value) => {
		return new Promise((resolve, reject) => {
			console.log('1' + value + 'bar');
			resolve(value + 'bar');
		});
	})
	.then((value) => {
		// setTimeout(() => {
		// 	console.log('2' + value + 'baz');
		// }, 1000);
		// return value;
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log('2' + value + 'baz');
				resolve(value + 'baz');
			}, 3000);
		});
	})
	.then((value) => {
		console.log('3' + value);
	});
console.log('Second');

*/

//Invoking reject callback for subsequent then methods. Happens when previous then returns a rejected promise
/*
Promise.resolve()
	.then(() => {
		// Makes .then() return a rejected promise
		throw new Error('Oh no!');
		// return new Promise((resolve, reject) => {
		// 	reject('Oh no!');
		// });
	})
	.then(
		() => {
			console.log('Not called.');
		},
		(error) => {
			console.error('onRejected function called: ' + error.message); // in case of Error object
			// console.error('onRejected function called: ' + error); //in case of rejected promise
		}
	);

*/

//Promise APIs

//1. Promise.all()
//if any one of the promise rejects, Promise.all() returns a promise using the first promise reject value independent of the status of the other fulfilled promises

// let allPromises = Promise.all([Promise.resolve('1'), Promise.reject('2')]);
// let allPromises = Promise.all([Promise.resolve('1'), Promise.resolve('2')]);

// setTimeout(() => {
// 	console.log(allPromises);
// }, 1000);

// console.log(allPromises);

//2. Promise.allSettled()
//returns the settled (resolve/reject) value of all the promises

// let allPromises = Promise.allSettled([Promise.resolve('1'), Promise.reject('2')]);

// setTimeout(() => {
// 	console.log(allPromises);
// }, 1000);

// console.log(allPromises);

//3. Promise.any() (experimental method, may not be supported in all platforms)
//returns any one fulfilled promises

//4. Promise.race()
//returns the settled (resolve/reject) value of first promise in the iterable

// let allPromises = Promise.race([Promise.reject('2'), Promise.resolve('1')]);

// setTimeout(() => {
// 	console.log(allPromises);
// }, 1000);

// console.log(allPromises);

//5. Promise.resolve(value)
//6. Promise.reject(reason)
