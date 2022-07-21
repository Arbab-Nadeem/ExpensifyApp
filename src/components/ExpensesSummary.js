import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/ExpensesTotal';
import getVisibleExpenses from '../selectors/visibleExpenses';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
	const expenseWord = expenseCount === '1' ? 'expense' : 'expenses';
	const formattedExpenses = numeral(expensesTotal / 100).format('$0,0.00');
	return (
		<div>
			<p>
				Viewing {expenseCount} {expenseWord} of total{' '}
				{formattedExpenses}
			</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	return {
		expenseCount: visibleExpenses.length,
		expensesTotal: selectExpensesTotal(visibleExpenses),
	};
};

export default connect(mapStateToProps)(ExpensesSummary);
// <p>lorem</p>;
