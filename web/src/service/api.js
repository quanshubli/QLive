import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:3000",
  timeout: 3000
});

// const filterResponse = (res) => {
//   if (res.status === 404 || res.status === 500 || res.status === 503) {
//     console.log('服务不可用');
//   }
//   if (res.status === 403) {
//     console.log('无权限执行当前操作');
//   }
// };

const fetch = {
  get: (url, callback) => {
    return instance({
      method: "get",
      url
    })
      .then((res) => {
        callback && callback(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  post: (url, data, callback) => {
    return instance({
      method: "post",
      url,
      data
    })
      .then((res) => {
        callback && callback(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default fetch;