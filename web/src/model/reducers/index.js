// 整合 reducers
import { combineReducers } from "redux";

import {
  lives,
  livesLoading
} from "./live";
import { sorts } from "./sort";
import { search } from "./search";

const rootReducer = combineReducers({
  lives,
  livesLoading,
  sorts,
  search
});

export default rootReducer;