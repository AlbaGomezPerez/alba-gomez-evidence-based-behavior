import React from 'react';
import { configure, shallow } from 'enzyme';
// import {describe, expect, it} from '@jest/globals';
import Adapter from 'enzyme-adapter-react-16';

import Home from "./Home";
import UsersList from "./UsersList";


configure({adapter: new Adapter()});

describe('<UsersList />', () => {
    it('shoud render UsersList component', () => {
        const wrapper =  shallow(<Home />);
        expect(wrapper.find(UsersList)).toHaveLength(1);
    });
});
