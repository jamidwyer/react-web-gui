import { SET_VISIBILITY_FILTER } from "../constants/ActionTypes";
import { SHOW_ALL } from "../constants/ItemFilters";

const visibilityFilter = (action, state = SHOW_ALL) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
