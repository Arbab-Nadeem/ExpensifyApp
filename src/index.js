import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/visibleExpenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configStore();

store.subscribe(() => {
	const state = store.getState();
	getVisibleExpenses(state.expenses, state.filters);
});

store.dispatch(
	addExpense({ description: 'water bill', amount: 2000, createdAt: 10000 })
);
store.dispatch(
	addExpense({ description: 'gas bill', amount: 3500, createdAt: 21000 })
);
store.dispatch(
	addExpense({ description: 'rent', amount: 15000, createdAt: 5000 })
);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
