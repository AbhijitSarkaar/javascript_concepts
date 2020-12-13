//setTimeout

//a function/code to be called/executed after a specific time duration
//duration in in milliseconds. 1 ms = 1/1000 second

//clearTimeout can be used to not schedule the event

function foo() {
	console.log('Hi');
}

setTimeout(foo, 0); //passing a reference to the function

function print(...rest) {
	console.log(rest.join(' '));
}

let timerId = setTimeout(print, 1000, 'Hi', 'Abhi'); //passing the arguments to print function
console.log(timerId);
clearTimeout(timerId); //cancels the scheduled event
