import { getUsers } from '../ApiHelper/ApiHelper'
export function incrementAction(counter) {
  return {
    type: 'INCREMENT_ACTION',
    payload: counter
  };
}

export function updateUsersActions(users) {
  return {
    type: 'UPDATE_USERS',
    payload: users
  }
}


export function getUsersAction () {
  return (dispatch) => {
    getUsers()
      .then(({data}) => {dispatch(updateUsersActions(data))})
      .catch(console.log('ERREUR DE JE NE SAIS PAS QUOI (ADIB ADIBOU)'));
  }
}