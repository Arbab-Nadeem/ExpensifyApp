import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getDatabase, ref, get, set } from 'firebase/database';
import {
	startAddExpenses,
	editExpense,
	addExpense,
	removeExpense,
	startRemoveExpense,
	setExpenses,
	startSetExpenses,
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
const createMockStore = configureMockStore([thunk]);
// const database = getDatabase();
const dbRef = ref(database, 'expenses');

/* Here we need some data to fetch from firebase so in order to fetch that data we need to create some test data. That will be fetched from fixture data.  */
beforeEach((done) => {
	const expensesData = {};
	expenses.forEach(({ id, description, note, amount, createdAt }) => {
		expensesData[id] = { description, note, amount, createdAt };
	});
	/* Here we need some kind of parsing to pass array data to firebase. */

	/* BeforeEach is not going to wait for this to complete. It means there might be chances for 
	testcases to run before the data get saved to the firebase. So we passed done to beforeEach to make sure that it don't allow the test cases to run before the firebase actually synced up the data.
	*/
	set(dbRef, expensesData).then(() => done());
});

test("it'll remove the expense object", () => {
	const result = removeExpense({ id: 'fq243fsgv5y25i' });
	expect(result).toEqual({ id: 'fq243fsgv5y25i', type: 'REMOVE_EXPENSE' });
});

test('Should remove the expense from the firebase', (done) => {
	const store = createMockStore({});
	const id = expenses[2].id;
	store.dispatch(startRemoveExpense({ id }))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: 'REMOVE_EXPENSE',
				id,
			});
			return get(ref(database, `expenses/${id}`));
		})
		.then((snapshot) => {
			expect(snapshot.val()).toBeFalsy();
			done();
		});
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

			return get(ref(database, `expenses/${actions[0].expense.id}`));
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

			return get(ref(database, `expenses/${actions[0].expense.id}`));
		})
		.then((snapshot) => {
			expect(snapshot.val()).toEqual(expenseDefaults);
			done();
		});
});

test('should setup set expense action object with data', () => {
	const action = setExpenses(expenses);
	expect(action).toEqual({
		type: 'SET_EXPENSES',
		expenses,
	});
});

test('should fetch the expenses from firebase', (done) => {
	const store = createMockStore({});
	store.dispatch(startSetExpenses()).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'SET_EXPENSES',
			expenses,
		});
		done();
	});
});
