// 整合 reducers
import { combineReducers } from "redux";

import { lives, sorts } from "./live";

const rootReducer = combineReducers({
  lives,
  sorts
});

export default rootReducer;