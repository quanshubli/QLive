import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import initialState from "./initialState";

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    thunkMiddleware,  // 允许 dispatch() 函数
    loggerMiddleware  // 打印 action 日志
  )
);

export default store;