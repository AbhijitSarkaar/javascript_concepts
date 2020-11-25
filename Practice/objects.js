//1. in operator for objects

let car = {
	a: 'nano',
	b: 'nixon',
	c: 'hexa',
	color: {
		tyre: 'black',
		model: 'white',
	},
};

// console.log('a' in car);

//2. property access

// console.log(car[a], car.a); //throws error as a is not defined

let key = 'a';
// console.log(car[key], car.a);

//3. initializations

// car = new Object(); // overwriting the prev definition

// console.log(car['a']);

//4. create, assign and spread operator

let newCar1 = Object.create(car);
newCar1.a = 'baleno1';
newCar1['d'] = 'swift';
newCar1.color.tyre = 'blue'; //changing color
// console.log(newCar1, car);

let newCar2 = { ...car };
newCar2.a = 'baleno2';
newCar2.color.tyre = 'red';
// console.log(newCar2, car);

let newCar3 = Object.assign({}, car);
newCar3.a = 'baleno3';
newCar3.color.tyre = 'grey';
// console.log(newCar3, car);

//5. new keyword

function Vehicle(tyre, color, name) {
	this.tyre = tyre;
	this.color = color;
	this.name = name;
}
let bus = new Vehicle();

function Foo(x) {
	return {
		bar: function () {
			return x;
		},
	};
}

let foo = Foo(5);
let foo1 = Foo(5);
// console.log(foo.bar());
// console.log(foo1.bar());

//6
//Whenever prototype is changed. constructor property of a object is deleted and set to Object
//instanceof: used to check if a object is a instance of a given constructor
//hasOwnProperty: used to check if a object has a property

function House(numBedrooms) {
	this.numBedrooms = numBedrooms;
}

//constructor is House
House.prototype = {
	color: 'white',
};
let myHouse = new House(4);

console.log(myHouse.constructor === House); //false as constructor is deleted when prototype is assigned a new object.
//It can be true if
/*
House.prototype = {
	constructor: House
}; 
*/
//is used
// console.log(myHouse instanceof House); //true
// console.log(myHouse instanceof Object); //true
// console.log(myHouse.hasOwnProperty('numBedrooms')); //true
console.log(myHouse.constructor); //constructor is Object now

//7
//Animal class
function Animal() {}
Animal.prototype.eat = function () {
	console.log('eats');
};

//Bird, a subtype of Animal
function Bird() {}

Bird.prototype = Object.create(Animal.prototype);

//Now the constructor for Bird is Animal function
Bird.prototype.constructor = Bird; //sets the constructor of inherited objects from Bird as Bird, otherwise it will point to Animal.prototype.constructor/Animal function
//Now all the Bird type instances will have constructor as Bird
Bird.prototype.fly = function () {
	console.log('Flying');
};

let peacock = new Bird();
console.log(peacock.constructor);
console.log(peacock.eat()); //uses the eat() method of Animal.prototype
peacock.fly();

//8
//Mixins: used for adding same functionality to different unrelated objects by passing the object

//10
//IIFE
(function () {
	console.log('IIFE Running!');
})();
