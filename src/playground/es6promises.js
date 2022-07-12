const promise = new Promise((resolve, reject) => {
	resolve('my data is resolved');
	reject('my failure');
});

promise.then((data) => {
	console.log(data);
});
