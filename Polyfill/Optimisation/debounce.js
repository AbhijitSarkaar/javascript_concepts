/**
 * Fundamentals
 *
 * debounce is used to execute a function after a specified time duration has elapsed
 *
 */
/**
 * Fiddle: https://jsfiddle.net/97bhxc25/46/
 */
function debounce(callback, delay) {
	var prevTimerId;
	return function () {
		if (prevTimerId) clearTimeout(prevTimerId);
		prevTimerId = setTimeout(() => {
			callback();
		}, delay);
	};
}

function callAPI() {
	console.log('calling api...');
}

const debounceHandler = debounce(callAPI, 300);
