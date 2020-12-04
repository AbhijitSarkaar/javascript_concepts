//bind is used to attach a function to a specifid instance/value of this (e.g window, class, object)
//bind returns a copy of the function bounded to a instance. it's used to set the correct context
//https://javascript.info/bind

//Example 1
function sum1(x, y, z) {
	return x + y + z;
}

let a = sum1.bind(this, 5); //it fixes 5 as first argument
console.log(a(6, 9));

//Exmaple 2
let user = {
	name: 'John',
	sayHi: function (phrase) {
		console.log(phrase + ', ' + this.name);
	},
};

let boundSayHi = user.sayHi.bind(user);
boundSayHi('Hi');

//changing the user object, it changes the reference
user = {
	name: 'Mark',
	sayHi: function (phrase) {
		console.log(phrase + ', ' + this.name);
	},
};

boundSayHi('Helo'); //Still boundSayHi is using old user reference
