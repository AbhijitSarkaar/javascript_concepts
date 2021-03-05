/**
 * Fundamentals
 *
 * bind method is used to bind the context to a function
 * explicit binding is achieved through bind method
 * a function that is bound to a context can not be bound to any other context using bind, call, apply
 * new context can be set only using new keyword
 * bind returns a copy of the function bounded to a instance
 *
 */

//Usage

function display(a, b) {
	console.log(this.firstName + this.lastName + ' ' + a + ' ' + b);
}

let batman = {
	firstName: 'Bat',
	lastName: 'man',
};

let superman = {
	firstName: 'Super',
	lastName: 'man',
};

var boundedDisplay = display.bind(batman, 'is awesome', 'at everything'); //sets the context to batman and returns a bounded function
var boundedDisplay1 = display.bind(superman, 'is awesome', 'at everything'); //sets the context to batman and returns a bounded function
var boundedDisplay2 = boundedDisplay.bind(superman, 'is awesome', 'at everything'); //does not change the context in boundedDisplay

boundedDisplay();
boundedDisplay1();
boundedDisplay2();

//Polyfill

let user = {
	name: 'Elon',
};

let user2 = {
	name: 'Bill',
};

function printName() {
	console.log('Hi ' + this.name);
}

Function.prototype.myBind = function (arg) {
	//myBind returns a function closed over a variable arg
	let obj = this;
	// console.log(this);
	return function () {
		// console.log('closed variable arg', arg);
		obj.call(arg);
	};
};

//following statement returns a function which is having a closure with obj = printName and arg = user
let print1 = printName.myBind(user);

//after binding with user2 in print1, print1 still does not change as it's having closure with user object
//print1 = function() {
// printName.call(user)
// }

let print2 = print1.myBind(user2);
print1();
print2();
