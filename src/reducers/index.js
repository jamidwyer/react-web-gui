import { combineReducers } from "redux";
import items from "./items";
import visibilityFilter from "./visibilityFilter";

const rootReducer = combineReducers({
  items,
  visibilityFilter,
});

export default rootReducer;
