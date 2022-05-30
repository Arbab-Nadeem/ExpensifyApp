// import React from 'react';
// import ReactDOM from 'react-dom';

// const Info = (props) => (
// 	<div>
// 		<h1>Info</h1>
// 		<p>This is the info: {props.info}</p>
// 	</div>
// );

// /* const withAdminWarning = (WrappedComponent) => {
// 	return (props) => (
// 		<div>
// 			{props.isAdmin && (
// 				<p>
// 					this is the private info. Please don't share with
// 					anyone.
// 				</p>
// 			)}
// 			<WrappedComponent {...props} />
// 		</div>
// 	);
// }; */
// const requireAuthentication = (WrappedComponent) => {
// 	return (props) => (
// 		<div>
// 			{props.isAuthenticated ? (
// 				<WrappedComponent {...props} />
// 			) : (
// 				<p>Please login first to get Access</p>
// 			)}
// 		</div>
// 	);
// };
// // const AdminInfo = withAdminWarning(Info);
// const AuthInfo = requireAuthentication(Info);
// /* ReactDOM.render(
// 	<AdminInfo isAdmin={true} info='there are the details' />,
// 	document.getElementById('app')
// ); */
// ReactDOM.render(
// 	<AuthInfo isAuthenticated={false} info='there are the details' />,
// 	document.getElementById('app')
// );

// let id = 421341;
// let arr = [23424, 421341, 1341341, 13415515];

// arr = arr.filter((value) => value !== id);
// console.log(arr);

// let arrayOfObjects = [
// 	{
// 		description: 'rent',
// 		amount: 300,
// 	},
// 	{
// 		description: ' gas bill',
// 		amount: 600,
// 	},
// 	{
// 		description: 'water bill',
// 		amount: 700,
// 	},
// ];

// arrayOfObjects = arrayOfObjects.map((expense) => {
// 	if (expense.amount > 300) {
// 		return {
// 			expense,
// 		};
// 	}
// });

// console.log(arrayOfObjects);

/* function myFunction(arr, nth) {
    console.log(nth);
	return arr.filter((e, i) => i % nth === nth - 1);
}
console.log(myFunction([1, 2, 3, 4, 5, 6], 4));
console.log(myFunction([1, 2, 3, 4, 5, 6], 2));
console.log(myFunction([1, 2, 3, 4, 5, 6], 3));
console.log(myFunction([1, 2, 3, 4, 5, 6], 4));
 */

/* const user = {
	name: 'arbab',
	reg: 232,
};

const getData = () => ({
	...user,
	name: 'adil',
	loction: 'Islamabad',
});
console.log(getData());
 */
