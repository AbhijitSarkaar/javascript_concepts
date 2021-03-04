/**
 * Fundamentals
 *
 * It is used to pass the execution context. also called explicit/hard binding
 * It's a good way to use a function as a method of a object
 * it executes the called function immediately
 * it does not create a new function
 *
 */

//Usage

function display(str) {
	return this.firstName + this.lastName + ' ' + str;
}

let batman = {
	firstName: 'Bat',
	lastName: 'man',
};

let superman = {
	firstName: 'Super',
	lastName: 'man',
};

var bat = display.call(batman, 'is Awesome');

//Anonymous function
var sup = function (str) {
	return this.firstName + this.lastName + ' ' + str;
}.call(superman, 'is Awesome');
// console.log(bat);
// console.log(sup);

//Polyfill

Function.prototype.myCall = function (context, ...args) {
	var newContext = Object.create(context); //it's used to not add a method to calling object
	newContext.method = this;
	return newContext.method(...args);
};

console.log(display.myCall(batman, 'is awesome'));
console.log(batman);
