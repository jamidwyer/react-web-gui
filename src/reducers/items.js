import classicBooks from "../mockData/books";

import { UPDATE_ITEM_STATUS } from "../constants/ActionTypes";

const initialState = {
  items: classicBooks,
  completedItems: 0,
};

// eslint-disable-next-line default-param-last
export default function items(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ITEM_STATUS: {
      return {
        type: UPDATE_ITEM_STATUS,
        ...state,
        items: state.items.map((item) =>
          item.id === action.id
            ? { ...item, completed: !item.completed }
            : item,
        ),
      };
    }
    default:
      return state;
  }
}
