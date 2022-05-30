// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import React from 'react';
// import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';
test('should render the component', () => {
	const wrapper = shallow(<Header />);

	expect(wrapper).toMatchSnapshot();
	// expect(wrapper.find('h1').text()).toBe('Expensify');
	// const renderer = new ReactShallowRenderer();
	// renderer.render(<Header />);
	// expect(renderer.getRenderOutput()).toMatchSnapshot();
});
