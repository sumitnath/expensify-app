import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Actions

// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
	return {
		type: 'ADD_EXPENSE',
		expense: {
			id: uuid(),
			description: description,
			note: note,
			amount: amount,
			createdAt: createdAt
		}
	};
};

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => {
	return {
		type: 'REMOVE_EXPENSE',
		id
	};
};

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});

// SORT_BY_DATE
const sortByDateFilter = () => ({
	type: 'SORT_BY_DATE',
	date: 'date'
});

// SORT_BY_AMOUNT
const sortByAmountFilter = () => ({
	type: 'SORT_BY_AMOUNT',
	amount: 'amount'
});

// SET_START_DATE
const setStartDateFilter = (startDate = undefined) => ({
	type: 'SET_START_DATE',
	startDate
});

// SET_END_DATE
const setEndDateFilter = (endDate = undefined) => ({
	type: 'SET_END_DATE',
	endDate
});

// Expenses Reducer

// Default State
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	if (action.type == 'ADD_EXPENSE') {
		return [
			...state,
			action.expense
		];
	} else if (action.type == 'REMOVE_EXPENSE') {
		return state.filter(({ id }) => {
			return id !== action.id;
		})
	} else if (action.type == 'EDIT_EXPENSE') {
		return state.map((expense) => {
			if (expense.id == action.id) {
				return {
					...expense,
					...action.updates
				};
			} else {
				return expense;
			};
		});
	}
	return state;
};

// Filters Reducer

// Default State
const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	if (action.type == 'SET_TEXT_FILTER') {
		return {
			...state,
			text: action.text
		};
	} else if (action.type == 'SORT_BY_DATE') {
		return {
			...state,
			sortBy: action.date
		};
	} else if (action.type == 'SORT_BY_AMOUNT') {
		return {
			...state,
			sortBy: action.amount
		};
	} else if (action.type == 'SET_START_DATE') {
		return {
			...state,
			startDate: action.startDate
		};
	} else if (action.type == 'SET_END_DATE') {
		return {
			...state,
			endDate: action.endDate
		};
	};
	return state;
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
	return expenses.filter((expense) => {
		const startDateMatch = typeof startDate != 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate != 'number' || expense.createdAt <= endDate;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

		return startDateMatch && endDateMatch && textMatch;
	}).sort((a, b) => {
		if (sortBy == 'date') {
			return a.createdAt < b.createdAt ? 1 : -1;
		} else if (sortBy == 'amount') {
			return a.amount < b.amount ? 1 : -1;
		}
	});
};

// Store Creation and Combinding Reducers Using combineReducers() function
const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
);

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: -211000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffe', amount: 300, createdAt: -1000 }));
//
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
//
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
//
store.dispatch(sortByAmountFilter());
store.dispatch(sortByDateFilter());

// store.dispatch(setStartDateFilter(0));
// store.dispatch(setStartDateFilter());
// store.dispatch(setEndDateFilter(1000));

// const user = {
// 	name: 'Bart',
// 	age: 23
// };
//
// console.log({
// 	...user,
// 	location: 'Los Angeles',
// 	age: 24
// });
