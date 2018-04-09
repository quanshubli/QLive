import fetch from "../../service/api";

// 根据关键字搜索直播间/分类
export const fetchByKeyword = (keyword) => {
  return dispatch => {
    return fetch.get(
      `/live/search?keyword=${keyword}`,
      (data) => {
        if (data.data) {
          dispatch(getSearchResult(data.data));
        }
      }
    );
  };
};

export const GET_SEARCH_RESULT = 'GET_SEARCH_RESULT';
export const getSearchResult = (result) => {
  return {
    type: GET_SEARCH_RESULT,
    search: result
  };
};