let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [[2]];
let d = [[9], [9], 1, 2];
let e = 5;

console.log(a.concat(b));
console.log(a.concat(c));
console.log(a.concat(d));
console.log(a.concat(e));
console.log(a);

//concat does not mutate the arrays/values it's working on. It only returns a new array after the operation.
//this is the functional programming way of doing things
