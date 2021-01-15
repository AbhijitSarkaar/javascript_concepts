/**
 * In order to hide the class properties, they can be declared inside the constructor using the var keyword
 * so that they’re only accessible through getters/setters, which can also be defined inside the constructor
 */

//class syntax
class Vehicle {
	constructor(name) {
		this.name = name;
	}
}

const Car = new Vehicle('ford');
console.log(Car.name);

//getter and setter

class Person {
	static instanceCount = 0;
	constructor(firstName, lastName) {
		var _firstName = firstName; // '_' is used for naming convention of private variable. _firstName is hidden from outside
		this._lastName = lastName;
		this.getName = function () {
			return _firstName + ' ' + this._lastName;
		};
		Person.instanceCount++;
	}

	//setter
	set setLastName(name) {
		this._lastName = name;
	}
}

const arnold = new Person('Arnold', 'Sharma');
//setting the name
arnold.setLastName = 'Astha';

//getting the name
console.log(arnold.getName());
console.log(Person.instanceCount);
