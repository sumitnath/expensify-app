import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/expense_list.js';
import { expenses } from '../fixtures/expenses.js';

test('should render ExpenseList with expenses', () => {
	const wrapper = shallow(<ExpenseList expenses={expenses}/>)
	expect(wrapper).toMatchSnapshot();
});

test('should reneder ExpenseList with empty message', () => {
	const wrapper = shallow(<ExpenseList expenses={[]}/>);
	expect(wrapper).toMatchSnapshot();
});
