import * as types from "../constants/ActionTypes";

export const createItem = (text) => ({
  type: types.CREATE_ITEM,
  payload: { text },
});
export const deleteItem = (id) => ({
  type: types.DELETE_ITEM,
  payload: id,
});
export const editItem = (id, text) => ({
  type: types.EDIT_ITEM,
  id,
  text,
});
export const completeItem = (id) => ({
  type: types.COMPLETE_ITEM,
  id,
});
export const completeAllItems = () => ({
  type: types.COMPLETE_ALL_ITEMS,
});
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED });
export const setVisibilityFilter = (filter) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter,
});
export const updateItemStatus = (id) => {
  console.log(id);
  return {
    type: types.UPDATE_ITEM_STATUS,
    id,
  };
};
export const setSearchTerms = (searchTerms) => {
  console.log(searchTerms);
  return {
    type: types.SET_MULTI_SELECTIONS,
    searchTerms,
  };
};

export const performSearch = (searchTerms) => {
  console.log(searchTerms);
  return {
    type: types.PERFORM_SEARCH,
    searchTerms,
  };
};

export const fetchSearchData = (searchTerms) => async (dispatch) => {
  const url = new URL();
  url.searchParams.set("q", searchTerms);
  try {
    const response = await fetch(url);
    const searchResults = response.json();
    dispatch({
      type: types.FETCH_SEARCH_DATA,
      searchResults,
      searchTerms,
    });
  } catch (e) {
    console.log(e);
    // TODO: dispatch error
  }
};
