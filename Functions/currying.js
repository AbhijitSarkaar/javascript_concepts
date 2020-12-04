//https://blog.bitsrc.io/understanding-currying-in-javascript-ceb2188c339

//currying is used to convert a function with N arguments into N functions with 1 arguments
//closure makes currying possible. It's the ability to retain state. The arguments are saved in the lexical environment
//useful in reducing redundancy e.g calling a function with same argument repeatedly

function sum(x) {
	return function sum_one_level(y) {
		return function sum_two_level(z) {
			return x + y + z;
		};
	};
}

let a = sum(1);
let b = a(2);
let c = b(3);
console.log(c);

//adds 1 to any combination of arguments
console.log(a(6)(7));
console.log(a(8)(9));
