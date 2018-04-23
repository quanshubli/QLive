import { REGISTER_SUCCESS } from '../actions/register';
import { LOGOUT, LOGIN_SUCCESS } from '../actions/authority';

export const user = (state = null, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:  
    case LOGOUT:  
      return action.user;
    default:
      return state;
  }
}