import moment from 'moment';
// const expenses =
export default [
	{
		id: '1',
		description: 'rent',
		note: '',
		amount: 300,
		createdAt: 100,
	},
	{
		id: '2',
		description: 'coffee',
		note: '',
		amount: 1000,
		createdAt: moment(0).subtract(4, 'days').valueOf(),
	},
	{
		id: '3',
		description: 'gum',
		note: '',
		amount: 700,
		createdAt: moment(0).add(4, 'years').valueOf(),
	},
];
