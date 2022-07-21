import React from 'react';
import { connect } from 'react-redux';
import {
	setTextFilter,
	sortByAmount,
	sortByDate,
	setStartDate,
	setEndDate,
} from '../actions/filters';
import { DateRangePicker } from 'react-dates';
// ExpenseListFilters

export class ExpenseListFilters extends React.Component {
	state = {
		calendarFocused: null,
	};
	onDatesChange = ({ startDate, endDate }) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};
	onFocusChange = (calendarFocused) => {
		this.setState(() => ({ calendarFocused }));
	};

	onTextChange = (event) => {
		
		this.props.setTextFilter(event.target.value);
	};
	onSortChange = (event) => {
		if (event.target.value === 'date') {
			this.props.sortByDate();
		} else if (event.target.value === 'amount') {
			this.props.sortByAmount();
		}
	};
	render() {
		return (
			<div>
				<input
					type='text'
					value={this.props.filters.text}
					onChange={this.onTextChange}
				/>
				<select
					value={this.props.filters.sortBy}
					onChange={this.onSortChange}
				>
					<option value='date' key='date'>
						Date
					</option>
					<option value='amount' key='amount'>
						Amount
					</option>
				</select>
				<DateRangePicker
					startDate={this.props.filters.startDate}
					endDate={this.props.filters.endDate}
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					numberOfMonths={1}
					isOutsideRange={() => false}
					showClearDates={true}
				/>
			</div>
		);
	}
}

const mapPropsToState = (state) => ({
	filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
	setTextFilter: (text) => dispatch(setTextFilter(text)),
	sortByDate: () => dispatch(sortByDate()),
	sortByAmount: () => dispatch(sortByAmount()),
	setStartDate: (startDate) => dispatch(setStartDate(startDate)),
	setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapPropsToState, mapDispatchToProps)(ExpenseListFilters);
