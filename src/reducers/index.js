import { combineReducers } from "redux";
import items from "./items";
import searchData from "./searchData";
import visibilityFilter from "./visibilityFilter";

const rootReducer = combineReducers({
  items,
  searchData,
  visibilityFilter,
});

export default rootReducer;
