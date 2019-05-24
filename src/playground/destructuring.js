// //
// // Object destructuring
// //
//
// const person = {
// 	name: 'Bart',
// 	age: '23',
// 	location: {
// 		city: 'Los Angeles',
// 		temp: 80
// 	}
// };
//
// // Rename and Set default value to variable using {name: new_name = 'Default Value'} syntax
// const { name: firstName = 'Anonymous', age } = person;
//
// console.log(`${firstName} is ${age}.`);
//
// // Rename local variable using { name: new_name } syntax
// const { temp: temperature, city } = person.location;
//
// if (city && temperature) {
// 	console.log(`It's ${temperature} in ${city}.`);
// }
//
// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// }
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
//
// console.log(publisherName);

//
// Array destructuring
//

// const address = ['9016 S Hoover St.', 'Los Angeles', 'California', '90044'];
//
// const [ street, city, state, zip = 'N/A'] = address;
//
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];

const [ itemName, ,m_price ] = item;

console.log(`A medium ${itemName} costs ${m_price}`);
