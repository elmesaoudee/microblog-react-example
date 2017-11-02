import React from 'react';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import Message from './Message';

chai.use(chaiEnzyme());

describe('Message component', () => {
  it('should display Test Content', () => {
    const message = {
      author: 'Test',
      content: 'Content',
    };
    const wrapper = shallow(<Message message={message} />);
    expect(wrapper.find('.author')).to.have.text('Test');
    expect(wrapper.find('.content')).to.have.text('Content');
  });
});
