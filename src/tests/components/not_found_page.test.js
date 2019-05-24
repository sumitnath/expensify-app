import React from 'react';
import { shallow } from 'enzyme';
import { NotFoundPage } from '../../components/not_found_page.js';

test('should render NotFoundPage properly', () => {
	const wrapper = shallow(<NotFoundPage />);
	expect(wrapper).toMatchSnapshot();
});
