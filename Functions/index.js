//Exercises

//1
//duplicate parameter name
//the parameter declared later shadows previous params

function foo(a,b,a,b) {
    console.log(a,b,a)
}
foo(1,2,3,4)

//2
//duplicate parameter name
//arrow function does not allow duplicate params

const foo1 = (a,b,a,b) => {
    console.log(a,b,a)
}
foo1(1,2,3,4)