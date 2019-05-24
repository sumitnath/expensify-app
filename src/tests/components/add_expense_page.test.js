import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/add_expense_page.js';
import { expenses } from '../fixtures/expenses.js';

test('should render AddExpensePage correctly', () => {
	const addExpense = jest.fn();
	const history = { push: jest.fn() };
	const wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>);
	expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
	const addExpense = jest.fn();
	const history = { push: jest.fn() };
	const wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>);
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
	expect(history.push).toHaveBeenCalledWith('/');
	expect(addExpense).toHaveBeenCalledWith(expenses[0]);
});
