import moment from 'moment';
import getVisibleExpenses from '../../selectors/visibleExpenses';

import expenses from '../fixtures/testData';
test('should filter by text value', () => {
	const filters = {
		text: 'e',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined,
	};
	const action = getVisibleExpenses(expenses, filters);
	expect(action).toEqual([expenses[0], expenses[1]]);
});

test('should filter by start Date', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: moment(0),
		endDate: undefined,
	};
	const action = getVisibleExpenses(expenses, filters);
	expect(action).toEqual([expenses[2], expenses[0]]);
});

test('should filter by End Date value', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: moment(0),
		endDate: moment(0).add(2, 'years'),
	};
	const action = getVisibleExpenses(expenses, filters);
	expect(action).toEqual([expenses[0]]);
});

test('should filter by date', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined,
	};
	const action = getVisibleExpenses(expenses, filters);
	expect(action).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should filter by amount', () => {
	const filters = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined,
	};
	const action = getVisibleExpenses(expenses, filters);
	expect(action).toEqual([expenses[1], expenses[2], expenses[0]]);
});
