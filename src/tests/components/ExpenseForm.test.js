import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should render the Expense form correctly', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
});
test('Should render the Expense form with data', () => {
	const wrapper = shallow(<ExpenseForm expense={expenses[2]} />);
	expect(wrapper).toMatchSnapshot();
});
test('Should render error for an invalid data', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
	wrapper.find('form').simulate('submit', {
		preventDefault: () => {},
	});
	expect(wrapper.state('error').length).toBeGreaterThan(0);
	expect(wrapper).toMatchSnapshot();
});

test('should set the description on change input', () => {
	const value = 'new description';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(0).simulate('change', {
		target: { value },
	});
	expect(wrapper.state('description')).toBe(value);
	expect(wrapper).toMatchSnapshot();
});
test('should set the note on change textarea', () => {
	const value = 'new note';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('textarea').simulate('change', {
		target: { value },
	});
	expect(wrapper.state('note')).toBe(value);
	expect(wrapper).toMatchSnapshot();
});
test('should set the amount if valid input', () => {
	const value = '23.43';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change', {
		target: { value },
	});
	expect(wrapper.state('amount')).toBe(value);
	expect(wrapper).toMatchSnapshot();
});
test("shouldn't set the amount if invalid input", () => {
	const value = '12.122';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change', {
		target: { value },
	});
	expect(wrapper.state('amount')).toBe('');
	expect(wrapper).toMatchSnapshot();
});

test('Should call onSubmit prop for valid form  submission', () => {
	const onSpySubmit = jest.fn();
	const wrapper = shallow(
		<ExpenseForm expense={expenses[0]} onSubmit={onSpySubmit} />
	);
	wrapper.find('form').simulate('submit', {
		preventDefault: () => {},
	});
	expect(wrapper.state('error')).toBe('');
	expect(onSpySubmit).toHaveBeenLastCalledWith({
		description: expenses[0].description,
		note: expenses[0].note,
		amount: expenses[0].amount,
		createdAt: expenses[0].createdAt,
	});
	expect(wrapper).toMatchSnapshot();
});

test('should set the new date on date change', () => {
	const now = moment();
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('SingleDatePicker').prop('onDateChange')(now);
	expect(wrapper.state('createdAt')).toEqual(now);
	// expect(wrapper).toMatchSnapshot();
});

test('should set the calendar focus on focus change', () => {
	const focused = true;
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
	expect(wrapper.state('calendarFocused')).toBe(focused);
	// expect(wrapper).toMatchSnapshot();
});
