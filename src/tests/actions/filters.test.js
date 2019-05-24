import moment from 'moment';
import { setTextFilter, sortByDateFilter, sortByAmountFilter, setStartDateFilter, setEndDateFilter } from '../../actions/filters.js';

test('should generate set start date action object', () => {
	const action = setStartDateFilter(moment(0));
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	});
});

test('should generate set end date action object', () => {
	const action = setEndDateFilter(moment(0));
	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0)
	});
});

test('should generate set text filter action object with arguments', () => {
	const action = setTextFilter('setting text');
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: 'setting text'
	});
});

test('should generate set text filter object with no arguments (default)', () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: ''
	});
});

test('should sort by date', () => {
	const action = sortByDateFilter();
	expect(action).toEqual({
		type: 'SORT_BY_DATE',
		date: 'date'
	});
});

test('should sort by amount', () => {
	const action = sortByAmountFilter();
	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT',
		amount: 'amount'
	});
});
