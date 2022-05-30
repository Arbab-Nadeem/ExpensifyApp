//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text,
});
//SORT_BY_DATE
const sortByDate = () => ({
	type: 'SORT_BY_DATE',
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT',
});
//SET_START_DATE
const setStartDate = (startDate) => ({
	type: 'SET_START_DATE',
	startDate,
});
//SET_END_DATE
const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate,
});
export { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate };
