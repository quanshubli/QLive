// 初始 State
export default {
  livesLoading: false,
  lives: {
    count: 0,
    list: []
  },
  search: {
    sorts: [],
    lives: []
  },
  sorts: {
    count: 0,
    list: []
  },
  user: localStorage.getItem('access-token') ? JSON.parse(localStorage.getItem('access-token')).user : null
};