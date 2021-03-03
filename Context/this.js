/*
    https://codeburst.io/all-about-this-and-new-keywords-in-javascript-38039f71780c
    https://blog.bitsrc.io/understanding-call-bind-and-apply-methods-in-javascript-33dbf3217be

    1. this is a object which is executing the function (think of it as inside a house, this house refers to the current house). 
        For a method, this refers to the object.
        For a regular function, this refers to a global/window object.
        default binding happen in non-strict mode which makes the window as default value of this, 
        in strict mode default value of this is undefined
    2. call() is used to pass the execution context. also called explicit/hard binding. It does not create a new copy of function
        It's a good way to use a function as a method of a object
    3. bind() creates a copy of the function used
    4. apply() has a array as it's arguments. it serves same purpose as call()
    5. every function is an object, so a function has call, bind, apply built in methods
	6. new keyword creates a new object
	7. Need to know the arrow function and this connections
*/

/* 
// 1. different value of this
var obj1 = {
	name: 'Pulsar',
	bike: function () {
		console.log(this.name);
	},
};
var obj2 = { name: 'Gixxer', bike: obj1.bike };
var name = 'Ninja';
var bike = obj1.bike;

bike(); // "Ninja"
obj1.bike(); // "Pulsar"
obj2.bike(); // "Gixxer"
*/

/* 
// 1. this value inside a forEach function
// 2. arrow function vs regular function handling of this

let video = {
	title: 'a',
	count: 0,
	tags: ['a', 'b'],
	showTags: function () {
        //arrow function takes this from the outer context
		// this.tags.forEach(() => {
		// 	this.count++; //using the video object as this
		// });
		// console.log(this.count);
		this.tags.forEach(function () {
			this.count++; //using the global object as this
		});
		console.log(this.count);
	},
};

video.showTags();
*/

/*
1. Using this inside a constructor

*/

function Room(owner, color) {
	this.owner = owner;
	this.color = color;
}

Room.prototype.paintRoom = function () {
	console.log('painted using color', this.color);
};

let johnsRoom = new Room('John', 'Red');
let jillsRoom = new Room('Jill', 'Blue');

johnsRoom.paintRoom();
jillsRoom.paintRoom();

//1. call() method to use different contexts

function Soap(name) {
	this.name = name;
}

let dove = new Soap('Dove');

let lux = new Soap('Lux');

const cleanTable = function () {
	console.log('clearning table using', this.name);
};

//Passing the context using call

cleanTable.call(dove);
cleanTable.call(lux);

//Arrow function and ES5 function

let obj = {
	foo: function () {
		console.log(this);

		//ES5 function, this refers to the global object
		function foo1() {
			console.log('foo1', this);
		}
		foo1();
		//Arrow function, this automatically refers to the obj because of lexical this
		foo2 = () => {
			console.log('foo2', this);
		};
		foo2();
	},
	a: 1,
};

obj.foo();
