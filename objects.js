/*

Object

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
    https://javascript.info/object
    1. {} to created objects are called object initializer
    2. Square brackets to be used for property access if it's not valid javascript identifier https://docstore.mik.ua/orelly/webprog/jscript/ch02_07.htm#:~:text=An%20identifier%20is%20simply%20a,Java%20and%20many%20other%20languages.
    3. object property keys may be either of string type, or of symbol type https://javascript.info/symbol
    4. object can be created using two methods, new Object() and {}
    5. object is a non primitive data type of javascript
    6. const keyword on objects can be used to change it's contents but now the whole object
    7. for..in loop to iterate over the keys
    8. in operator can be used for checking keys
    9. delete operator to delete a property

methods, variables
this
winddow objects
object references
what happens when one object is assigned to another object, about shallow/deep copy of the properties
chaining
spread operator, object assign()
prototypes (__proto__)
prototype inheritence

Current

*/

//Object creation using a constructor (new operator)

function Car(maker, model, year) {
	this.maker = maker;
	this.model = model;
	this.year = year;
}

let car1 = new Car('Tata', 'Nixon', '2014');

console.log(car1.maker, car1.model, car1.year);

//const keyword

const user = {
	name: 'Robin',
};

user.name = 'Pete'; //can change the properties of a const object

user = {
	name: 'Harry', //this throws an error, as it's an attempt to change the const object
};

console.log(user.name);
