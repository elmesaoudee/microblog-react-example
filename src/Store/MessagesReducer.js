export default function messagesReducer(prevState = [], action) {
    if(action.type === "UPDATE_MESSAGE") { return action.payload.reverse(); }
    return prevState;
}