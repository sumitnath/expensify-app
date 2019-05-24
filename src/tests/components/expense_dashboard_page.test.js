import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseDashboardPage } from '../../components/expense_dashboard_page.js';

test('should render ExpenseDashboardPage properly', () => {
	const wrapper = shallow(<ExpenseDashboardPage />);
	expect(wrapper).toMatchSnapshot();
});
