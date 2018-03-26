// 整合 reducers
import { combineReducers } from "redux";

import {
  lives,
  livesLoading
} from "./live";
import { sorts } from "./sort";

const rootReducer = combineReducers({
  lives,
  livesLoading,
  sorts
});

export default rootReducer;