import moment from 'moment';
import { filtersReducer } from '../../reducers/filters.js';

test('should setup default filter values', () => {
	const state = filtersReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});

test('should set text filter to text', () => {
	const text = 'hello 42';
	const action = {
		type: 'SET_TEXT_FILTER',
		text
	};
	const state = filtersReducer(undefined, action);
	expect(state.text).toBe(text);
});

test('should set sortBy to date', () => {
	const currentState = {
		text: '',
		startDate: undefined,
		endDate: undefined,
		sortBy: 'amount'
	};
	const action = { type: 'SORT_BY_DATE' };
	const state = filtersReducer(currentState, action);
	expect(state.sortBy).toBe('date');
});

test('should set sortBy to amount', () => {
	const action = { type: 'SORT_BY_AMOUNT' };
	const state = filtersReducer(undefined, action);
	expect(state.sortBy).toBe('amount');
});

test('should set startDate to moment start of month', () => {
	const startDate = moment()
	const action = {
		type: 'SET_START_DATE',
		startDate
	}
	const state = filtersReducer(undefined, action);
	expect(state.startDate).toBe(startDate);
});

test('should set endDate to moment end of month', () => {
	const endDate = moment()
	const action = {
		type: 'SET_END_DATE',
		endDate
	}
	const state = filtersReducer(undefined, action);
	expect(state.endDate).toBe(endDate);
});
