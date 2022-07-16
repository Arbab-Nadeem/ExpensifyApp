import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, wrapper, history;
beforeEach(() => {
	startEditExpense = jest.fn();
	startRemoveExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage
			startRemoveExpense={startRemoveExpense}
			startEditExpense={startEditExpense}
			history={history}
			expense={expenses[1]}
		/>
	);
});
test('Should render the edit expense page correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('Should handle onSubmit', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startEditExpense).toHaveBeenLastCalledWith(
		expenses[1].id,
		expenses[1]
	);
});
test('Should handle onClick', () => {
	wrapper.find('button').simulate('click');
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startRemoveExpense).toHaveBeenLastCalledWith({
		id: expenses[1].id,
	});
});
