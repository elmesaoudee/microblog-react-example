export default function usersReducer(prevState = [], action) {
  if(action.type === "UPDATE_USERS") {
    return action.payload;
  }
  return prevState;
}