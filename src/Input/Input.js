import React from 'react';
import InputClass from './Input.css';
import { addMessage } from '../Action/Messages';
import { connect } from 'react-redux';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.actionToTaKe = this.actionToTaKe.bind(this);
  }

  actionToTaKe(event) {
    if (event.target.value === 'Enter') {
      this.props.dispatch(addMessage);
    }
  }

  render() {
    return (
      <div className={InputClass.container}>
        <input className={InputClass.input} type="text" onKeyPress={this.actionToTaKe} />
      </div>
    );
  }
}

export default connect()(Input);
