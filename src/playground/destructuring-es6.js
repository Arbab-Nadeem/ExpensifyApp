// Object Destructuring
/* const Book = {
	title: 'the Ego is Enemy',
	author: 'Rayan Holiday',
	publisher: {
		name: 'Penguin',
		publishDate: '23 Oct, 2013',
	},
};

const { name: publisherName = 'self-published', publishDate } = Book.publisher;
console.log(`published by ${publisherName} on ${publishDate}`); */
//  Array Destructuring

const coffee = ['coffee(hot)', '$2.00', '$2.50', '$2.70'];

const [CoffeeName, , , LargeCoffee] = coffee;
console.log(`the  Large ${CoffeeName} costs ${LargeCoffee}`);
