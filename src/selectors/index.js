import { createSelector } from "reselect";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from "../constants/ItemFilters";

const getVisibilityFilter = (state) => state.visibilityFilter;
const getItems = (state) => state.items;

export const getVisibleCheckList = createSelector(
  [getVisibilityFilter, getItems],
  (visibilityFilter, items) => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return items;
      case SHOW_COMPLETED:
        return items.filter((t) => t.completed);
      case SHOW_ACTIVE:
        return items.filter((t) => !t.completed);
      default:
        throw new Error("Unknown filter: " + visibilityFilter);
    }
  }
);

export const getCompletedItemCount = createSelector([getItems], (items) =>
  items.reduce((count, item) => (item.completed ? count + 1 : count), 0)
);
