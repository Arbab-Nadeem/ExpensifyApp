import React from 'react';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';

test('Should render the Expense list items correctly', () => {
	const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
	expect(wrapper).toMatchSnapshot();
});
