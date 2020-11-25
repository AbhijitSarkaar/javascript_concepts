/*
object prototypes 

__proto__
constructor
constructor.prototype, Object.prototype
prototype inheritence
prototype chain
prototype and __proto__ difference
modifying prototypes

https://stackoverflow.com/questions/650764/how-does-proto-differ-from-constructor-prototype

    1. the prototype of an object can be set to only one object
    2. __proto__ property can be used to set the prototype of an object. the prototype can be a object or null (It's not advisable to use it (why?))
    3. inheriting properties from another object forms a prototype chain
    4. a constructor acts as a prototype of the objects created through it
    5. Object.create() can be used to create a object from another object and sets the object as a prototype of the to be created object
    7. constructor propoerty is a reference to the function that created the object
*/

//1.__proto__
//__proto__ is used as property of a object which is the prototype of the object
