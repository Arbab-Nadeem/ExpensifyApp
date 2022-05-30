import moment from 'moment';

const filters = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined,
};
const altFilters = {
	text: 'bill',
	sortBy: 'amount',
	startDate: moment(0),
	endDate: moment(0).add(3, 'years'),
};

export { filters, altFilters };
