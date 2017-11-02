import React from 'react';
import Proptypes from 'prop-types';
import Message from '../Message/Message';

function displayMessage(message) {
  return <Message message={message} />;
}

function MessageList({ messages }) {
  return (<div>{messages.map(displayMessage)}</div>);
}
export default MessageList;
