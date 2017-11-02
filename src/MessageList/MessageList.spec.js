import React from 'react';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import Message from '../Message/Message';
import MessageList from './MessageList';

chai.use(chaiEnzyme());

describe('Message List component', () => {
  it('should display all messages', () => {
    const messageTab = [
      {
        author: 'Test',
        content: 'Content',
      },
      {
        author: 'Test2',
        content: 'Content2',
      },
    ];
    const wrapper = shallow(<MessageList messages={messageTab} />);
    expect(wrapper.find(Message)).to.have.length(2);
  });
});
