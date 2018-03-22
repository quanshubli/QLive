// 整合 reducers
import { combineReducers } from "redux";

import {
  lives,
  livesLoading,
  sorts
} from "./live";

const rootReducer = combineReducers({
  lives,
  livesLoading,
  sorts
});

export default rootReducer;