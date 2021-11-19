import classicBooks from "../mockData/books";

import {
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  COMPLETE_ITEM,
  COMPLETE_ALL_ITEMS,
  CLEAR_COMPLETED,
  SET_MULTI_SELECTIONS,
  UPDATE_ITEM_STATUS,
} from "../constants/ActionTypes";

const initialState = {
  items: classicBooks,
  completedItems: 0,
};

export default function items(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ITEM_STATUS:
      {
        console.log(state);
        return {
          ...state,
          items: state.items.map((item) => {
            return item.id === action.id
              ? { ...item, completed: !item.completed }
              : item;
          }),
        };
      }
      console.log(state);
    default:
      return state;
  }
}
