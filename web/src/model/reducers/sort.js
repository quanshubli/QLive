import {
  GET_SORTS
} from "../actions/sort";

export const sorts = (state = {}, action) => {
  switch (action.type) {
    case GET_SORTS:  
      return {
        ...state,
        ...action.sorts
      };
    default:
      return state;
  }
};