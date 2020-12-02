function Book(title) {
	this.getTitle = function () {
		return 'Title: ' + title;
	};
}

let PP = new Book('War and Peace');
let SP = new Book('Sapiens');

console.log(PP.getTitle());
console.log(SP.getTitle());
