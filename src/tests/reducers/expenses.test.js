import uuid from 'uuid';
import { expensesReducer } from '../../reducers/expenses.js';

const expense = [{
	id: '1',
	description: 'Rent',
	note: 'monthly rent',
	amount: 0,
	createdAt: 0
}, {
	id: '2',
	description: 'Car',
	note: 'car note',
	amount: 1000,
	createdAt: 30
}];

test('expenses reducer default sets empty array', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should add expense', () => {
	const expense = {
		id: uuid(),
		description: 'Water Bill',
		note: 'home utilities',
		amount: 2300,
		createdAt: 87
	};
	const action = {
		type: 'ADD_EXPENSE',
		expense
	};
	const state = expensesReducer(expense, action);
	expect(state).toEqual([expense]);
});

test('should remove expense', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '1'
	};
	const state = expensesReducer(expense, action);
	expect(state).toEqual([expense[1]]);
});

test('should not remove expense if id is invalid', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '3'
	};
	const state = expensesReducer(expense, action);
	expect(state).toEqual(expense);
});

test('should edit expense', () => {
	const expense_edit = [{
		id: '1',
		description: 'Rent',
		note: 'monthly rent',
		amount: 0,
		createdAt: 0
	}, {
		id: '2',
		description: 'Car',
		note: 'this car sucks',
		amount: 1000,
		createdAt: 30
	}];
	const action = {
		type: 'EDIT_EXPENSE',
		id: '2',
		updates: {
			note: 'this car sucks'
		}
	}
	const state = expensesReducer(expense, action);
	expect(state).toEqual(expense_edit);
});

test('should not edit expense if expense not found', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: '3',
		updates: {
			description: 'shit'
		}
	}
	const state = expensesReducer(expense, action);
	expect(state).toEqual(expense);
});
