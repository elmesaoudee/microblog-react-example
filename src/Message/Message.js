import React from 'react';
import Proptypes from 'prop-types';
import MessageClass from './Message.css';

function Message({ message }) {
  return (
    <div className={MessageClass.item}>
      <div className={[MessageClass.author, 'author'].join(' ')}>{message.author}</div>
      <div className={[MessageClass.content, 'content'].join(' ')}>{message.content}</div>
    </div>
  );
}

export default Message;

Message.propTypes = {
  message: Proptypes.shape({
    author: Proptypes.string.isRequired,
    content: Proptypes.string.isRequired,
  }).isRequired,
};
