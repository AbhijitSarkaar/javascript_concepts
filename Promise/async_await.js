//Example 1

let p = async function foo() {
	let promise = new Promise((res, rej) => setTimeout(() => res('resolved value'), 1000));
	return await promise;
};

let p1 = p().then((res) => console.log(res));

//Example 2

function getUsers() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject([
				{
					name: 'Abhi',
				},
				{
					name: 'Ricky',
				},
			]);
		}, 1000);
	});
}

async function foo() {
	let response = await getUsers();
	console.log(response);
}

foo();
