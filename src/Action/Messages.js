import {postMessage, fetchMessages} from "../ApiHelper/ApiHelper";


export function updateMessagesAction(messages) {
    return {
      type: 'UPDATE_MESSAGE',
      payload: messages
    };
}


export function addMessage(message) {
    return (dispatch) => {
        postMessage(message, "Rania")
            .then(fetchMessages)
            .then(({data}) => {dispatch(updateMessagesAction(data))})
            .catch(console.log('ERREUR DE JE NE SAIS PAS QUOI (ADIB ADIBOU)'));
    }
}