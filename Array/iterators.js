let list = [1, 2, 3, 4];

let iterator = list[Symbol.iterator]();

console.log(iterator.next());
