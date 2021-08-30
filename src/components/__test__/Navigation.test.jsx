import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import { Navigation } from '../Navigation';

configure({adapter: new Adapter()});
let defaultProps;
let wrapper;

const setup = (props = {}) => shallow(<Navigation {...defaultProps} {...props} />)

beforeEach(() => {
    wrapper = setup()
});

describe('Navigation', () => {
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
})