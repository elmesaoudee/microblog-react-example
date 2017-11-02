import React from 'react';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import NavigationBar from "./NavigationBar";
import { NavLink } from "react-router-dom";

chai.use(chaiEnzyme());

describe('NavigationBar component', () => {
    it('should have a NavLink that redirects to /about', () => {

        const wrapper = shallow(<NavigationBar/>);
        expect(wrapper.find(NavLink).first().props().to).to.equal("/");
        expect(wrapper.find(NavLink).last().props().to).to.equal("/about");
    });
});
