import MessageNumber from "../NavigationBar/MessageNumber";
import { connect } from 'react-redux';

function mapStateToProps(currentState) {
    return {
        messageNumber: currentState.messages.length
    };
}
export default connect(mapStateToProps)(MessageNumber)
