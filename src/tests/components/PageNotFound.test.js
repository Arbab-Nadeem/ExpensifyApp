import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from '../../components/PageNotFound';

test('Should render the PageNotFound correctly', () => {
	const wrapper = shallow(<PageNotFound />);
	expect(wrapper).toMatchSnapshot();
});
