import fetch from "../../service/api";

export const fetchLives = (page, pageSize, sort) => {
  return dispatch => {
    dispatch(changeLivesLoading(true));
    return fetch.get(
      `/live?p=${page || 1}&n=${pageSize || 40}&sort=${sort || ""}`,
      (data) => {
        if (data.data) {
          dispatch(getLives(data.data.lives));
          dispatch(changeLivesLoading(false));
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

export const CHANGE_LIVES_LOADING = "CHANGE_LIVES_LOADING";
export const changeLivesLoading = (flag) => {
  return {
    type: CHANGE_LIVES_LOADING,
    loading: flag
  }
};