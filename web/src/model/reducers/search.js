import { GET_SEARCH_RESULT } from '../actions/search';

export const search = (state = {}, action) => {
  switch (action.type) {
    case GET_SEARCH_RESULT:
      return {
        ...state,
        ...action.search
      };
    default:
      return state;
  }
};