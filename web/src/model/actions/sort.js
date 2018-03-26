import fetch from "../../service/api";

export const fetchSorts = (page, pageSize) => {
  return dispatch => {
    return fetch.get(
      `/sort?p=${page || 1}&n=${pageSize || 40}`,
      (data) => {
        if (data.data) {
          dispatch(getSorts(data.data.sorts));
        }
      }
    );
  };
};

export const GET_SORTS = "GET_SORTS";
export const getSorts = (sorts) => {
  return {
    type: GET_SORTS,
    sorts
  };
};