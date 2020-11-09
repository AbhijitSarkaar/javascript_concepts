//in operator for objects

let car = {
	a: 'nano',
	b: 'nixon',
	c: 'hexa',
};

// console.log('a' in car);

//property access

console.log(car[a], car.a); //throws error as a is not defined

let key = 'a';
console.log(car[key], car.a);
