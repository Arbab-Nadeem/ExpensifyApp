import React from 'react';
import ExpenseForm from './ExpenseForm';
import { startAddExpenses } from '../actions/expenses';
import { connect } from 'react-redux';

export class AddExpensePage extends React.Component {
	onSubmit = (expense) => {
		this.props.startAddExpenses(expense);
		this.props.history.push('/');
	};
	render() {
		return (
			<div>
				<h1>Add Expense</h1>
				<ExpenseForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	startAddExpenses: (expense) => dispatch(startAddExpenses(expense)),
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
