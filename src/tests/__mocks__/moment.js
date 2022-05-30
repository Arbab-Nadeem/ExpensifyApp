// import moment from 'moment';

/*  

************ MANUAL MOCKS ************ on JEST
this is actually a fake library of the moment library.
called mocking of the moment library
So we're going to create a fake version of the moment library that is going to allow us to define what

this whole technique of mocking out third party libraries can seem very strange at first

*/
const moment = require.requireActual('moment');
export default (timestamp = 0) => {
	return moment(timestamp);
};
