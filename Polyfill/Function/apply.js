/**
 * Fundamentals
 *
 * It is used to pass the execution context. also called explicit/hard binding
 * It's a good way to use a function as a method of a object
 * it executes the called function immediately
 * it does not create a new function
 * it accepts an array of arguments
 *
 */

//Usage
function display(str1, str2) {
	return this.firstName + this.lastName + ' ' + str1 + ' ' + str2;
}

let batman = {
	firstName: 'Bat',
	lastName: 'man',
};

let superman = {
	firstName: 'Super',
	lastName: 'man',
};

let bat = display.apply(batman, ['is Awesome', 'at everything']);

//Polyfill

Function.prototype.myApply = function (context, args) {
	if (!args instanceof Array) {
		throw new TypeError("'arguments' should be an array");
	}
	var newContext = Object.create(context);
	newContext.method = this;
	return newContext.method(...args);
};

var sup = display.myApply(superman, ['is Awesome', 'at everything']);
console.log(sup);
