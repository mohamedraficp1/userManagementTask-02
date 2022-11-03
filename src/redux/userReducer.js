
export function userReducer(
  state = {
    users: localStorage.getItem('signupUsers') ? JSON.parse(localStorage.getItem('signupUsers')) : [],
    loggedUser :localStorage.getItem('loggedUser') ? JSON.parse(localStorage.getItem('loggedUser')) : null
},action) {
  switch (action.type) {
    case "SIGNUP":
      
      localStorage.setItem('signupUsers', JSON.stringify([...state.users, action.payload]));
      return { ...state, users: [...state.users, action.payload] } ;

    case "LOGIN":
      localStorage.setItem('loggedUser', JSON.stringify( action.payload));
      return { ...state, loggedUser:  action.payload};

    case "LOGOUT" : 
    localStorage.setItem('loggedUser', JSON.stringify( null));
      return { ...state, loggedUser: null};

    default:
      return state;
  }
}