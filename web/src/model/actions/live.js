import fetch from "../../service/api";

export const fetchLives = () => {
  return dispatch => {
    return fetch.get(
      "/lives",
      (data) => {
        if (data.data) {
          dispatch(getLives(data.data.lives));
        }
      }
    );
  };
};

export const GET_LIVES = "GET_LIVES";
export const getLives = (lives) => {
  return {
    type: GET_LIVES,
    lives
  }
};