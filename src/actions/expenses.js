// import { v4 as uuidv4 } from 'uuid';
import { get, push, ref, remove, update, child } from 'firebase/database';

// ADD_EXPENSE
import database from '../firebase/firebase';
const addExpense = (expense) => ({
	type: 'ADD_EXPENSE',
	expense,
});
// const database = getDatabase();
const dbRef = ref(database, 'expenses');
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

const startRemoveExpense = ({ id } = {}) => {
	/* dispatch will be passed to this function by redux library */
	return (dispatch) => {
		return remove(ref(database, `expenses/${id}`)).then(() => {
			dispatch(removeExpense({ id }));
		});
	};
};
//EDIT_EXPENSE
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates,
});

const startEditExpense = (id, updates) => {
	return (dispatch) => {
		return update(ref(database, `expenses/${id}`), updates).then(() =>
			dispatch(editExpense(id, updates))
		);
	};
};

const setExpenses = (expenses) => ({
	type: 'SET_EXPENSES',
	expenses,
});
const startSetExpenses = () => {
	return (dispatch) => {
		return get(dbRef).then((snapshot) => {
			const expenses = [];
			snapshot.forEach((childSnapshot) => {
				expenses.push({
					id: childSnapshot.key,
					...childSnapshot.val(),
				});
			});
			dispatch(setExpenses(expenses));
		});
	};
};

export {
	setExpenses,
	startSetExpenses,
	addExpense,
	startAddExpenses,
	removeExpense,
	startRemoveExpense,
	editExpense,
	startEditExpense,
};
