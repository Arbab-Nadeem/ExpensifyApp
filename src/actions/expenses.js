// import { v4 as uuidv4 } from 'uuid';
import { push } from 'firebase/database';

// ADD_EXPENSE
import { dbRef } from '../firebase/firebase';
const addExpense = (expense) => ({
	type: 'ADD_EXPENSE',
	expense,
});
/* const addExpense = ({
	description = '',
	note = '',
	amount = 0,
	createdAt = 0,
} = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuidv4(),
		description,
		note,
		amount,
		createdAt,
	},
});
 */
const startAddExpenses = (expenseData = {}) => {
	return (dispatch) => {
		/* this function gets called internally by redux and it gets called with dispatch. This just gives us access to dispatch so we can use it inside of here after we're done doing whatever we're going to be writing some data to Firebase waiting for that data to correctly sync. Then we'll use dispatch to dispatch add expense, making sure the Redux store reflects those changes*/
		const {
			description = '',
			note = '',
			amount = 0,
			createdAt = 0,
		} = expenseData;
		const expense = { description, amount, note, createdAt };
		return push(dbRef, expense).then((reference) => {
			dispatch(
				addExpense({
					id: reference.key,
					...expense,
				})
			);
		});
	};
};
//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id,
});
//EDIT_EXPENSE
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates,
});

export { startAddExpenses, addExpense, removeExpense, editExpense };
