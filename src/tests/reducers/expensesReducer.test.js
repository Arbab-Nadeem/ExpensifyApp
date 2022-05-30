
import expensesReducer from '../../reducers/expensesReducer';

import expenses from '../fixtures/testData';

test('should set the expensesReducer defaults state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should remove the expense ', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[2].id,
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[1]]);
});

test("should not remove the expense  if id doesn't match", () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1',
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should add an expense', () => {
	const expense = {
		id: 'abc123',
		description: 'laptop',
		note: '',
		amount: 5000,
		createdAt: 20000,
	};
	const action = {
		type: 'ADD_EXPENSE',
		expense,
	};
	const state = expensesReducer(expenses, action);

	expect(state).toEqual([...expenses, expense]);
});

test('should edit the expense ', () => {
	const description = 'edited description';
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[2].id,
		updates: {
			description,
		},
	};
	const state = expensesReducer(expenses, action);
	expect(state[2].description).toBe(description);
});

test("shouldn't edit the expense ", () => {
	const description = 'edited description';
	const action = {
		type: 'EDIT_EXPENSE',
		id: '-1',
		updates: {
			description,
		},
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});
