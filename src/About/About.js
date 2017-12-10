import React from 'react';
import { connect } from 'react-redux';
import AboutClass from './About.css';
import { getUsersAction } from '../Action/CounterAction'
import incrementAction from '../Action/CounterAction';
class About extends React.Component {

    constructor(props) {
        super(props);
        this.clickme = this.clickme.bind(this);
    }

    clickme() {
        this.props.dispatch(getUsersAction());
    }

    render() {
      console.log("users:  ",this.props.users);
        return (
            <div className={AboutClass.container}>
                <button type="submit" onClick={this.clickme}>CLICK ME</button>
                <h1>{this.props.counter}</h1>
            </div>
        );
    }
}

function mapStateToProps(currentState) {
  return {
    counter: currentState.counter,
    users: currentState.users,
  };
}

export default connect(mapStateToProps)(About);
