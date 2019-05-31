// import * as firebase from 'firebase/app';
// import 'firebase/database';
//
// const firebaseConfig = {
// 	apiKey: "AIzaSyD80PaUdAsvtxPqi6u5FEw16gyuzct0a0M",
// 	authDomain: "expensify-926d9.firebaseapp.com",
// 	databaseURL: "https://expensify-926d9.firebaseio.com",
// 	projectId: "expensify-926d9",
// 	storageBucket: "expensify-926d9.appspot.com",
// 	messagingSenderId: "162478942777",
// 	appId: "1:162478942777:web:186347c3b1e60092"
// };
//
// firebase.initializeApp(firebaseConfig);
//
// const database = firebase.database();

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });
//
// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });
//
// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
// 	.once('value')
// 	.then((snapshot) => {
// 		const expenses = [];
//
// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});
//
// 		console.log(expenses);
// 	});

// database.ref('expenses').on('value', (snapshot) => {
// 	const expenses = [];
//
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});
//
// 	console.log(expenses);
// });

// --- Adding expenses

// database.ref('expenses').push({
// 	description: 'Gym membership',
// 	note: '24 hour fitness',
// 	amount: 4500,
// 	createdAt: 3
// });

// --- Adding, Updating, and Removing to firebase 'Arrays/Objects'

// database.ref('notes/-Lg6sPeArFD9_WL3Pvwx').update({
// 	body: 'Go eat with friends'
// });

// database.ref('notes/-Lg6sPeArFD9_WL3Pvwx').remove();

// database.ref('notes').push({
// 	title: 'Course Topics',
// 	body: 'React, C, Python, JS'
// });

// -- Challenge

// database.ref().on('value', (snapshot) => {
// 	const val = snapshot.val();
// 	const name = val.name;
// 	const job = val.job.title;
// 	const company = val.job.company;
//
// 	console.log(val);
// 	console.log(`${name} is a ${job} at ${company}.`);
// });

// setTimeout(() => {
// 	database.ref('job/company').set('Google');
// }, 3500);

// --- Fetching Data

// const onValueChange = database.ref().on('value', (snapshot) => {
// 	console.log(snapshot.val());
// }, (e) => {
// 	console.log('Error with data fetching', e);
// });
//
// setTimeout(() => {
// 	database.ref('age').set(23);
// }, 3500);
//
// setTimeout(() => {
// 	database.ref().off('value', onValueChange);
// }, 7000);
//
// setTimeout(() => {
// 	database.ref('age').set(30);
// }, 10500);

// database.ref()
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log('Error fetching data', e);
// 	});

// --- Adding & Removing Data

// database.ref().set({
// 	name: 'Bart Gonzalez',
// 	age: 23,
// 	stressLevel: 6,
// 	job: {
// 		title: 'Software developer',
// 		company: 'Google'
// 	},
// 	location: {
// 		city: 'Fremont',
// 		country: 'USA'
// 	}
// }).then(() => {
// 	console.log('Data is saved.');
// }).catch((e) => {
// 	console.log('This failed.', e);
// });

// database.ref().update({
// 	stressLevel: 9,
// 	'job/company': 'Amazon',
// 	'location/city': 'Seattle'
// });

// database.ref('isSingle')
// 	.remove()
// 	.then(() => {
// 		console.log('isSingle removed.');
// 	})
// 	.catch((e) => {
// 		console.log('could not remove isSingle', e);
// 	});
