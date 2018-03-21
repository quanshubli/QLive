import {
  GET_LIVES
} from "../actions/live";

export const lives = (state = [], action) => {
  switch (action.type) {
    case GET_LIVES:
      return [
        ...state,
        ...action.lives
      ];
    default:
      return state;
  }
};

export const sorts = (state = [], action) => {
  return state;
};