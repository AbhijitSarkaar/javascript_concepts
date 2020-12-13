//setTimeout

//a function/code to be called/executed after a specific time duration
//duration in in milliseconds. 1 ms = 1/1000 second

//clearTimeout can be used to not schedule the event

function foo() {
	console.log('Hi');
}

// setTimeout(foo, 0); //passing a reference to the function

function print(...rest) {
	console.log(rest.join(' '));
}

let timerId = setTimeout(print, 1000, 'Hi', 'Mark'); //passing the arguments to print function
// console.log(timerId);
clearTimeout(timerId); //cancels the scheduled event

//setInterval

// setInterval(print, 1000, 'Hi', 'Mark'); //print Hi Mark every 1 second

//Exercise

//a function which prints 1 -> 10 every second

//using setTimeout

function print(num) {
	if(num > 10) return
	setTimeout(() => {
		console.log(num)
		print(num + 1);
	}, 1000)
}
print(1);

//using setInterval

let i = 1;
timerId = setInterval(() => {
	if(i < 11) console.log(i), i++;
	else clearInterval(timerId)
}, 1000)