class Vehicle {
	constructor(wheels) {
		this.wheels = wheels;
	}
	displayInfo() {
		console.log(this.wheels);
	}
	set setWheels(wheels) {
		this.wheels = wheels;
	}

	get getWheels() {
		return this.wheels;
	}
}

let Nexon = new Vehicle('Harrier');

console.log(Nexon.wheels);
console.log(typeof Nexon);
Nexon['displayInfo']();

class Car extends Vehicle {
	constructor(name, brand) {
		super(4);
		this.name = name;
		this.brand = brand;
	}
	displayInfo() {
		super.displayInfo();
		console.log(this.brand);
	}
}

let car = new Car('Harrier', 'Tata');
console.log(car);
car.displayInfo();
