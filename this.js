/*
    https://codeburst.io/all-about-this-and-new-keywords-in-javascript-38039f71780c
    https://blog.bitsrc.io/understanding-call-bind-and-apply-methods-in-javascript-33dbf3217be

    1. default binding happen in non-strict mode which makes the window as default value of this, in strict mode
    default value of this is undefined
    2. need to know how, when and from where the function is called, 
    does not matter how and where function is declared or defined
    3. call() is used to pass the execution context. also called explicit/hard binding. It does not create a new copy of function
    4. bind() creates a copy of the function used
    5. apply() has a array as it's arguments. it serves same purpose as call()
*/

// var obj1 = {
// 	name: 'Pulsar',
// 	bike: function () {
// 		console.log(this.name);
// 	},
// };
// var obj2 = { name: 'Gixxer', bike: obj1.bike };
// var name = 'Ninja';
// var bike = obj1.bike;

// bike(); // "Ninja"
// obj1.bike(); // "Pulsar"
// obj2.bike(); // "Gixxer"
