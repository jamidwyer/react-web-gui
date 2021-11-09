import * as types from "../constants/ActionTypes";

export const addItem = (text) => ({ type: types.ADD_ITEM, text });
export const deleteItem = (id) => ({ type: types.DELETE_ITEM, id });
export const editItem = (id, text) => ({ type: types.EDIT_ITEM, id, text });
export const completeItem = (id) => ({ type: types.COMPLETE_ITEM, id });
export const completeAllItems = () => ({ type: types.COMPLETE_ALL_ITEMS });
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED });
export const setVisibilityFilter = (filter) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter,
});
export const updateItemStatus = (id) => ({
  type: types.UPDATE_ITEM_STATUS,
  id,
});
export const setMultiSelections = (multiSelections) => ({
  type: types.SET_MULTI_SELECTIONS,
  multiSelections,
});
