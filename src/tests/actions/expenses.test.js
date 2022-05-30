import { editExpense, addExpense, removeExpense } from '../../actions/expenses';

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
	const expenseData = {
		description: 'rent',
		note: 'this is for the last month.',
		createdAt: '10000',
		amount: 5000,
	};
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String),
		},
	});
});

test('should setup the add expense function with the default values', () => {
	const action = addExpense();
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
