import { combineReducers } from "redux";

import stats from "./stats.reducer";
import legend from "./legend.reducer";
import displayer from "./displayer.reducer";

const rootReducer = combineReducers({
  stats,
  legend,
  displayer,
});

export default rootReducer;
