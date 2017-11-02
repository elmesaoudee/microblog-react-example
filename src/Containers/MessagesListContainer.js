import { connect } from 'react-redux';
import MessageList from "../MessageList/MessageList";

function mapStateToProps(currentState) {
    return {
        messages: currentState.messages
    };
}
export default connect(mapStateToProps)(MessageList)
