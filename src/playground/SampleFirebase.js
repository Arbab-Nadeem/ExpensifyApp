import {
	child,
	getDatabase,
	ref,
	remove,
	set,
	update,
	onValue,
	off,
	get,
	push,
	forEach,
	onChildRemoved,
	onChildChanged,
	onChildAdded,
} from 'firebase/database';
import { initializeApp } from 'firebase/app';

// Initialize Firebase

const firebaseConfig = {
	apiKey: 'AIzaSyDBYxrLePOOeN1PJUutUF9euNqI2eSnDmM',
	authDomain: 'expensifyapp-4e7b7.firebaseapp.com',
	databaseURL: 'https://expensifyapp-4e7b7-default-rtdb.firebaseio.com',
	projectId: 'expensifyapp-4e7b7',
	storageBucket: 'expensifyapp-4e7b7.appspot.com',
	messagingSenderId: '253742328489',
	appId: '1:253742328489:web:9a2d0e5d84abc730ad97b8',
	measurementId: 'G-3VTT1CL03J',
};
const app = initializeApp(firebaseConfig);
const database = getDatabase();
const dbRef = ref(database, 'Expenses');

push(dbRef, {
	description: 'car rent',
	amount: 466,
	note: 'this is my car rent',
	createdAt: 2132432325543,
});
push(dbRef, {
	description: 'Gas rent',
	amount: 500,
	note: 'Gas bill is paid',
	createdAt: 6789472345647,
});
push(dbRef, {
	description: 'Water',
	amount: 1000,
	note: 'pay the water bill',
	createdAt: 7432867745543,
});

// get(dbRef).then((snapshot) => {
// 	const expenses = [];
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val(),
// 		});
// 	});
// 	console.log(expenses);
// });

onValue(dbRef, (snapshot) => {
	const expenses = [];
	snapshot.forEach((childSnapshot) => {
		expenses.push({
			id: childSnapshot.key,
			...childSnapshot.val(),
		});
	});
	console.log(expenses);
});
onChildRemoved(dbRef, (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});
onChildChanged(dbRef, (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});
onChildAdded(dbRef, (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});

/* set(ref(database), {
	name: 'Arbab',
	isSingle: true,
	age: 23,
	stressLevel: 6,
	job: {
		title: 'software Developer',
		company: 'Google',
	},
	location: {
		city: 'Islamabad',
		country: 'Pakistan',
	},
}); */
/* get(dbRef)
	.then((snapshot) => {
		console.log(snapshot.val());
	})
	.catch((error) => {
		console.log(error);
	}); */

/* const unsubscribe = onValue(
	dbRef,
	(snapshot) => {
		console.log(snapshot.val());
	},
	(error) => {
		console.log(error);
	}
);

setTimeout(() => {
	onValue(
		dbRef,
		(snapshot) => {
			const val = snapshot.val();
			console.log(
				`${val.name} is a ${val.job.title} at ${val.job.company}`
			);
		},
		(error) => {
			console.log(error);
		}
	);
});
 */
/* setTimeout(() => {
	set(child(dbRef, 'age'), 28);
}, 3500);
setTimeout(() => {
	off(dbRef, unsubscribe);
}, 7000);
setTimeout(() => {
	set(child(dbRef, 'age'), 29);
}, 10500); */
/* get(child(dbRef, ''))
	.then((snapshot) => {
		console.log(snapshot.val());
	})
	.catch((error) => {
		console.log(error);
	});
 */
// set(ref(database, 'age'), 35);
/* set(ref(database, 'attributes'), {
	height: '165cm',
	weight: '50kg',
});*/
/* 
update(dbRef, {
	stressLevel: 9,
	'job/company': 'amazone',
	'location/city': 'Seattle',
}); */
/* update(dbRef, {
	name: 'Asad',
	age: 23,
	'location/city': 'Bhimber',
	job: 'Web development',
	isSingle: null,
}); */
/* update(dbRef, {
	name: 'Asad',
	age: 23,
	location: {
		country: 'Azad Kashmir',
		city: 'Bhimber',
	},
	job: 'Web development',
	isSingle: null,
}); */
/* remove(child(dbRef, 'attributes'))
	.then(() => {
		console.log('data is successfully removed');
	})
	.catch((error) => {
		console.log('error:', error);
	}); */
// remove(child(dbRef, 'age'));
// set(ref(database, 'age'), null);
