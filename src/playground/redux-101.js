import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy,
});
const resetCount = () => ({ type: 'RESET' });

const setCount = ({ count = 0 } = {}) => ({
	type: 'SET',
	count,
});
const countReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy,
			};
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy,
			};
		case 'RESET':
			return {
				count: 0,
			};
		case 'SET':
			return {
				count: action.count,
			};
		default:
			return state;
	}
};
const store = createStore(countReducer);
store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(decrementCount());
store.dispatch(setCount({ count: 120 }));
store.dispatch(setCount());

/* const add = ({ a, b }) => {
	return a + b;
};

console.log(add({ a: 2, b: 5 }));
 */
