//Strings are immutable
let str = 'Bob';
str[0] = 'J';
console.log(str);
str = 'Job';
console.log(str); //however assigning str to diff string works

//Array push and pop from front
let arr = [5, 2, 3, 4];

arr.shift();
console.log(arr);
arr.unshift(1);
console.log(arr);
