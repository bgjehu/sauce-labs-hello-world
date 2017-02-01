'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from '../../src/Header';

describe('<Header />', () => {
    it('renders a <h1/> with proper message', () => {
        const message = 'This is a header';
        const wrapper = shallow(<Header {...{message: message}}/>);
        expect(wrapper.find('h1').text()).to.equal(message);
    });
});