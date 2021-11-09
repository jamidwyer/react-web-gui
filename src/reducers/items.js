import classicBooks from "../constants/books";

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

const initialState = [
  {
    items: classicBooks,
    completedItems: 0,
  },
];

export default function items(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ITEM_STATUS: {
      return {
        ...state,
        items: state.items.map((item) => {
          return item.id === action.id
            ? { ...item, completed: !item.completed }
            : item;
        }),
      };
    }
    case SET_MULTI_SELECTIONS: {
      return {
        ...state,
        multiSelections,
      };
    }
    default:
      return state;
  }
}
