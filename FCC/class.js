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
	constructor(name) {
		this._name = name; // naming convention of private variable. although using '_' in name does not prevent the outside access to the private variable
	}

	//setter
	set setName(name) {
		this._name = name;
	}

	//getter
	get getName() {
		return this._name;
	}
}

const arnold = new Person('Arnold');
//setting the name
arnold.setName = 'Astha';

//getting the name
console.log(arnold.getName);
