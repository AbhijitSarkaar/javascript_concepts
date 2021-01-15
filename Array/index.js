//Exercises
//1
//empty values in a array. sparse arrays

let a = new Array(2)
console.log(a)
a = []
a[2] = 100;
console.log(a)
a = [,,,]
console.log(a)

//2
//toString method on arrays
a = [1,2,3,4];
console.log(a.toString()) //comma separated values

//3
//array is a truthy value
if([1,2]) console.log('true') 
