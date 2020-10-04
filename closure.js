/*
https://stackoverflow.com/questions/111102/how-do-javascript-closures-work

1. closures are used for maintaining a private state for a function by exposing getter and setter methods. 
2. closure are used for data hiding and encapsulation
3. the insider functions has access to outer scope because of scope chain. so when it's executed it can access the outer scope variables
4. the closer function has reference to the outer scope variables
5. every time a function is called, new execution context is created resulting in creating new local variables

*/

function atm() {
	let pin = 12345;
	return function () {
		console.log(pin);
	};
}

let getPin = atm();

getPin();
