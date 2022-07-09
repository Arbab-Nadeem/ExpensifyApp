import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should correctly render ExpenseSummary with 1 expense', () => {
	const wrapper = shallow(
		<ExpensesSummary expenseCount={1} expensesTotal={2342} />
	);
	expect(wrapper).toMatchSnapshot();
});
test('Should correctly render ExpenseSummary with more than 1 expense', () => {
	const wrapper = shallow(
		<ExpensesSummary expenseCount={3} expensesTotal={236323442} />
	);
	expect(wrapper).toMatchSnapshot();
});
