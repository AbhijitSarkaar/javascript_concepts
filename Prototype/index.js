//1
//__proto__: It's an object's property which is used to access the prototype of the object

function Vehicle(name, color, tyres) {
	this.name = name;
	this.color = color;
	this.tyres = tyres;
}

let car = new Vehicle('alto', 'white', 4);
// console.log(car.prototype); //undefined. instances does not have a prototype
// console.log(Vehicle.prototype); //prototype of a function in default is an empty object with constructor property set to Vehicle function

//__proto__ property refers to the template/prototype object for a object
// console.log(car.__proto__ === Vehicle.prototype);
// console.log(Vehicle.prototype.__proto === Object.prototype);

//2
//constructor property: It's a reference to the function that created the object i.e the constructor function

// console.log(car.constructor); //Vehicle class

let car1 = new car.constructor('car12', 'white', 4); //same as let car1 = new Vehicle('car1', 'white', 4)
// console.log(car1.name); //car12
// console.log(car1.constructor.name); //Vehicle

//3
//prototype: It's an object. the prototype of a function. The methods and properties here are meant to be inherited
//prototype is a property containing an object on which you define members that you want to be inherited. (Ref. MDN)
//"prototype" property is available only on functions
//instances does not have a "prototype" property

let car2 = new Vehicle('car2', 'white', 4);
let bus1 = new Vehicle('bus', 'white', 4);

//setting in the prototype and sharing across multiple instances. increases code reusability
Vehicle.prototype.maker = 'tata';
// console.log(car.maker);
// console.log(bus1.maker);

Vehicle.prototype.horn = function () {
	//sharing the honk method across Vehicle instances
	console.log(this.name + ' honking...');
};

car2.horn();
car1.horn();
bus1.horn();
