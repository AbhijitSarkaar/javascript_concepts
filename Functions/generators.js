/**
 * generators are special type of functions that "yields" values on using "yield" keyword
 * generators can "yield" multiple values on it's execution unlike regular functions which executes only once
 * generators has a syntax function* functionName() {}
 * the function call can be called with next() method to get the yielded values
 *
 */

function* foo() {
	yield 1;
}

let f = foo();
console.log(f.next());
console.log(f.next());
