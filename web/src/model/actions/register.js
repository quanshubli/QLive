import fetch from '../../service/api';

/**
 * 
 * @param {*} data 用户信息
 * @param {*} success 成功回调
 * @param {*} fail 失败回调
 */
export const register = (data, success, fail) => {
  return dispatch => {
    return fetch.post(
      `/user/register`,
      data,
      (res) => {
        if (res.code === 0) {
          const token = localStorage.getItem('access-token');
          const user = JSON.parse(token).user;
          dispatch(registerSuccess(user));
          success && success(res.msg);
        } else {
          fail && fail(res.msg);
        }
      }
    );
  };
};

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const registerSuccess = (user) => {
  return {
    type: REGISTER_SUCCESS,
    user
  };
};