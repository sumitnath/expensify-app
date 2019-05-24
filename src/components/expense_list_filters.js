import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByDateFilter, sortByAmountFilter, setStartDateFilter, setEndDateFilter } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
	state = {
		calendarFocused: null
	};
	onDatesChange = ({ startDate, endDate }) => {
		this.props.setStartDateFilter(startDate);
		this.props.setEndDateFilter(endDate);
	};
	onFocusChange = (calendarFocused) => {
		this.setState(() => ({ calendarFocused }));
	};
	onTextChange = (e) => {
		this.props.setTextFilter(e.target.value);
	};
	onSortChange = (e) => {
		if (e.target.value == 'amount') {
			this.props.sortByAmountFilter();
		} else if (e.target.value == 'date') {
			this.props.sortByDateFilter();
		}
	};
	render() {
		return (
			<div>
				<input
					type="text"
					value={this.props.filters.text}
					onChange={this.onTextChange}
				/>
				<select
					value={this.props.filters.sortBy}
					onChange={this.onSortChange}
				>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>
				<DateRangePicker
					startDate={this.props.filters.startDate}
					startDateId={'startDateId'}
					endDate={this.props.filters.endDate}
					endDateId={'endDateId'}
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
};

const mapDispatchToProps = (dispatch) => ({
	setTextFilter: (text) => dispatch(setTextFilter(text)),
	sortByDateFilter: () => dispatch(sortByDateFilter()),
	sortByAmountFilter: () => dispatch(sortByAmountFilter()),
	setStartDateFilter: (startDate) => dispatch(setStartDateFilter(startDate)),
	setEndDateFilter: (endDate) => dispatch(setEndDateFilter(endDate))
});

const mapStateToProps = (state) => {
	return {
		filters: state.filters
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
