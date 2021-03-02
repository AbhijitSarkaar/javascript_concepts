/**
 * Fundamentals
 *
 * it's used for limiting the execution of a function in a time duration
 * it's termed as rate limiter
 * it gets executed to the limit(e.g once, twice) in a time duration if a function is called consecutively
 * in throttle the first function call in a valid time duration in called
 *
 */

/**
 * Questions
 *
 * does throttle execute the last called function again in current window if more than one function was called
 * in the previous window?
 * No. the function needs to be called again after the time duration has passed in order to be executed
 *
 */

/**
 * Fiddle: https://jsfiddle.net/ovnme6ha/9/
 *
 */

//A div with id 'a' is needed to execute the below code
//below is throttle without arguments

function throttle(callback, timeDuration) {
	var canClick = true;
	return function throttleHandler() {
		//'this' here references the element
		if (canClick) {
			canClick = false;
			setTimeout(() => {
				canClick = true;
			}, 1000);
			callback();
		}
	};
}

function displayText() {
	console.log('clicked');
}

document.getElementById('a').addEventListener('click', throttle(displayText, 1000));
