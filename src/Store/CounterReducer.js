export default function counterReducer(prevState = 0, action) {
  if(action.type === "INCREMENT_ACTION") {
    return action.payload;
  }
  return prevState;
}