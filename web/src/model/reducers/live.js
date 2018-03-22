import {
  GET_LIVES,
  CHANGE_LIVES_LOADING
} from "../actions/live";

export const lives = (state = {}, action) => {
  switch (action.type) {
    case GET_LIVES:
      return {
        ...state,
        ...action.lives
      };
    default:
      return state;
  }
};

export const livesLoading = (state = false, action) => {
  switch (action.type) {
    case CHANGE_LIVES_LOADING:
      return action.loading;
    default:
      return state;
  }
};

export const sorts = (state = [], action) => {
  return state;
};