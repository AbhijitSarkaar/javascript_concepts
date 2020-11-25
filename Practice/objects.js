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
console.log(foo.bar());
console.log(foo1.bar());
