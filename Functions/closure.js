/*
https://stackoverflow.com/questions/111102/how-do-javascript-closures-work
https://medium.com/@5066aman/lexical-environment-the-hidden-part-to-understand-closures-71d60efac0e0

1. the insider functions has access to outer scope because of scope chain. so when it's executed it can access the outer scope variables
2. every time a function is called, new execution context is created resulting in creating new local variables
3. It's about keeping the lexical environment alive and portable

*/

function atm() {
	let pin = 12345;
	return function () {
		console.log(pin);
	};
}

let getPin = atm();

getPin(); //It keeps the outer references alive which was made during it's creation time and hence is able to access pin value
