import React from 'react';
import { fetchMessages } from '../ApiHelper/ApiHelper';
import Input from '../Input/Input';
import MessagesListContainer from "../Containers/MessagesListContainer";
import { connect } from 'react-redux';
import {updateMessagesAction } from '../Action/Messages';

class Microblog extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        fetchMessages()
            .then(({ data }) => { this.props.dispatch(updateMessagesAction(data)); })
            .catch(() => { console.log('Erreur de recupération de données'); });
    }

    render() {
        return (
            <div>
                <div>
                    <Input />
                    <MessagesListContainer />
                </div>
            </div>
        );
    }
}

export default connect()(Microblog);
