// REDUX STORE
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expensesReducer';
import filtersReducer from '../reducers/filtersReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
	const store = createStore(
		combineReducers({
			expenses: expensesReducer,
			filters: filtersReducer,
		}),
		composeEnhancers(applyMiddleware(thunk))
		/* window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__() */
	);
	return store;
};
