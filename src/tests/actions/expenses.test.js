import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getDatabase, ref, get } from 'firebase/database';
import {
	startAddExpenses,
	editExpense,
	addExpense,
	removeExpense,
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
// import database from '../../firebase/firebase';
const createMockStore = configureMockStore([thunk]);
const database = getDatabase();

test("it'll remove the expense object", () => {
	const result = removeExpense({ id: 'fq243fsgv5y25i' });
	expect(result).toEqual({ id: 'fq243fsgv5y25i', type: 'REMOVE_EXPENSE' });
});
test('this would edit expense', () => {
	const action = editExpense('123abc', { note: 'my new note' });
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {
			note: 'my new note',
		},
	});
});

test('should setup the add expense function with provided values. ', () => {
	const action = addExpense(expenses[1]);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[1],
	});
});

test('Should add expense to database and store', (done) => {
	const store = createMockStore({});
	const expenseData = {
		description: 'Mouse',
		amount: 23423,
		note: 'my new note',
		createdAt: 235435236242,
	};
	store.dispatch(startAddExpenses(expenseData))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: 'ADD_EXPENSE',
				expense: {
					id: expect.any(String),
					...expenseData,
				},
			});

			return get(ref(database, `Expenses/${actions[0].expense.id}`));
		})
		.then((snapshot) => {
			expect(snapshot.val()).toEqual(expenseData);
			done();
		});
});
test('Should add expense with  defaults to database and store', (done) => {
	const store = createMockStore({});
	const expenseDefaults = {
		description: '',
		amount: 0,
		note: '',
		createdAt: 0,
	};
	store.dispatch(startAddExpenses({}))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: 'ADD_EXPENSE',
				expense: {
					id: expect.any(String),
					...expenseDefaults,
				},
			});

			return get(ref(database, `Expenses/${actions[0].expense.id}`));
		})
		.then((snapshot) => {
			expect(snapshot.val()).toEqual(expenseDefaults);
			done();
		});
});

/* test('should setup the add expense function with the default values', () => {
	const action = startAddExpenses();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			description: '',
			note: '',
			createdAt: 0,
			amount: 0,
			id: expect.any(String),
		},
	});
});
 */
