import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/expense_list_item.js';
import { expenses } from '../fixtures/expenses.js';

test('should reneder ExpenseListItem', () => {
	const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
	expect(wrapper).toMatchSnapshot();
});
