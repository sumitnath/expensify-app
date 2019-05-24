import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/expense_list_filters.js';
import { filters, altFilters } from '../fixtures/filters.js';
import moment from 'moment';

let setTextFilter, sortByDateFilter, sortByAmountFilter, setStartDateFilter, setEndDateFilter, wrapper;

test('', () => {
	setTextFilter = jest.fn();
	sortByDateFilter = jest.fn();
	sortByAmountFilter = jest.fn();
	setStartDateFilter = jest.fn();
	setEndDateFilter = jest.fn();
	wrapper = shallow(
		<ExpenseListFilters
			filters={filters}
			setTextFilter={setTextFilter}
			sortByDateFilter={sortByDateFilter}
			sortByAmountFilter={sortByAmountFilter}
			setStartDateFilter={setStartDateFilter}
			setEndDateFilter={setEndDateFilter}
		/>
	);
});

test('should render ExpenseListFilters correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with a;t data correctly', () => {
	wrapper.setProps({
		filters: altFilters
	});
	expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
	const value = 'rent';
	wrapper.find('input').simulate('change', {
		target: { value }
	});
	expect(setTextFilter).toHaveBeenCalledWith(value);
});

test('should sort by date', () => {
	const value = 'date';
	wrapper.find('select').simulate('change', {
		target: { value }
	});
	expect(sortByDateFilter).toHaveBeenCalled();
});

test('should sort by amount', () => {
	const value = 'amount';
	wrapper.find('select').simulate('change', {
		target: { value }
	});
	expect(sortByAmountFilter).toHaveBeenCalled();
});

test('should handle date change', () => {
	const startDate = moment(0).add(4, 'years');
	const endDate = moment(0).add(8, 'years');
	wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });
	expect(setStartDateFilter).toHaveBeenLastCalledWith(startDate);
	expect(setEndDateFilter).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus change', () => {
	const calendarFocused = 'endDate';
	wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
	expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
