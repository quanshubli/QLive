// 整合 reducers
import { combineReducers } from "redux";

import {
  lives,
  livesLoading
} from "./live";
import { sorts } from "./sort";
import { search } from "./search";
import { user } from "./user";

const rootReducer = combineReducers({
  lives,
  livesLoading,
  sorts,
  search,
  user
});

export default rootReducer;