/**
 * Arrow functions resolved 'this' lexically: it goes up the scope chain till it finds a this value
 * new can't be used on arrow functions
 */

const a = () => {
	console.log(this);
};

function b() {
	console.log(this);
}

let obj = {
	g: 's',
};

a.call(obj); //window
b.call(obj); //obj
