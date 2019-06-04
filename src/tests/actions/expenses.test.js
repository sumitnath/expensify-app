import uuid from 'uuid';
import {
	startAddExpense,
	addExpense,
	editExpense,
	removeExpense,
	setExpenses,
	startSetExpenses,
	startRemoveExpense,
	startEditExpense
} from '../../actions/expenses.js';
import { expenses } from '../fixtures/expenses.js'
import configureMockStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';
import database from '../../firebase/firebase.js';

const createMockStore = configureMockStore([ReduxThunk]);

beforeEach((done) => {
	const expensesData = {};
	expenses.forEach(({ id, description, note, amount, createdAt }) => {
		expensesData[id] = { description, note, amount, createdAt };
	});
	database.ref('expenses').set(expensesData).then(() => done());
});

// remove expense test
test('should setup remove expense action object', () => {
	const action = removeExpense({ id: '123abc' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('should remove expense from firebase', (done) => {
	const store = createMockStore({});
	const id = expenses[2].id;
	store.dispatch(startRemoveExpense({ id })).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'REMOVE_EXPENSE',
			id
		});
		return database.ref(`expenses/${id}`).once('value');
	}).then((snapshot) => {
		expect(snapshot.val()).toBeFalsy();
		done();
	});
});

// edit expense test
test(('should setup edit expense action object'), () => {
	const action = editExpense('123abc', { note: 'new note value'});
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {
			note: 'new note value'
		}
	});
});

test('should edit expense to database and store', (done) => {
	const store = createMockStore({});
	const id = expenses[0].id;
	const updates = { amount: 21045 };
	store.dispatch(startEditExpense(id, updates)).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'EDIT_EXPENSE',
			id,
			updates
		});
		return database.ref(`expenses/${id}`).once('value');
	}).then((snapshot) => {
		expect(snapshot.val().amount).toBe(updates.amount);
		done();
	});
});

// add expense test
test(('should setup add expense action object'), () => {
	const action = addExpense(expenses[2]);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[2]
	});
});

test('should add expense to database and store', (done) => {
	const store = createMockStore({});

	const expense_data = {
		description: 'Mouse',
		amount: 3000,
		note: 'This one is good',
		createdAt: 1000
	};
	store.dispatch(startAddExpense(expense_data)).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expense_data
			}
		});

		return database.ref(`expenses/${actions[0].expense.id}`).once('value');
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(expense_data);
		done();
	});
});

test('should add expense with defaults to database store', (done) => {
	const store = createMockStore({});

	const expense_data = {
		description: '',
		amount: 0,
		note: '',
		createdAt: 0
	};
	store.dispatch(startAddExpense({})).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expense_data
			}
		});

		return database.ref(`expenses/${actions[0].expense.id}`).once('value');
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(expense_data);
		done();
	});
});

test('should setup set expense action object with data', () => {
	const action = setExpenses(expenses);
	expect(action).toEqual({
		type: 'SET_EXPENSES',
		expenses
	});
});

test('should fetch the expenses from firebase', (done) => {
	const store = createMockStore({});
	store.dispatch(startSetExpenses()).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'SET_EXPENSES',
			expenses
		});
		done();
	});
});
