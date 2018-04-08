import fetch from "../../service/api";

// （根据分类）获取直播间
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

// 根据关键字获取直播间
export const fetchLivesByKeyword = (keyword) => {
  console.log(keyword)
  return dispatch => {
    dispatch(changeLivesLoading(true));
    return fetch.get(
      `/live/search?keyword=${keyword}`,
      (data) => {
        if (data.data) {
          console.log(data.data)
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

// 获取直播间时 Loading
export const CHANGE_LIVES_LOADING = "CHANGE_LIVES_LOADING";
export const changeLivesLoading = (flag) => {
  return {
    type: CHANGE_LIVES_LOADING,
    loading: flag
  }
};