import { createSelector } from "reselect";
import {} from "../constants/ItemFilters";

const getItems = (state) => state.items;

const getCompletedItemCount = createSelector([getItems], (items) =>
  items.reduce(
    (count, item) => (item.completed ? count + 1 : count),
    0,
  ),
);

export default getCompletedItemCount;
