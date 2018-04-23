import fetch from '../../service/api';

export const LOGOUT = 'LOGOUT';
export const logout = () => {
  localStorage.removeItem('access-token');
  const token = localStorage.getItem('access-token');
  const user = token ? JSON.parse(token).user : null;
  return {
    type: LOGOUT,
    user
  }
};

export const login = (data, success, fail) => {
  const { phone, password } = data;
  return dispatch => {
    return fetch.post(
      '/user/login',
      {
        phone: phone || '',
        password: password || ''
      },
      (res) => {
        if (res.code === 0) {
          const token = localStorage.getItem('access-token');
          const user = JSON.parse(token).user;
          success && success(res.msg);
          dispatch(loginSuccess(user));
        } else {
          fail && fail(res.msg);
        }
      }
    );
  };
};

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
}