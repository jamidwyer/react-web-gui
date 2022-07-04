import schemas from "../mockData/schemas.json";

import {
  PERFORM_SEARCH,
  SET_MULTI_SELECTIONS,
} from "../constants/ActionTypes";

const initialState = {
  data: schemas["@graph"].map((schema) => {
    const thing = {
      creators: [],
      description: schema["rdfs:comment"],
      identifier: schema["@id"],
      name: schema["rdfs:label"],
    };
    return thing;
  }),
  searchTerms: [],
  searchOptions: schemas["@graph"].map(
    (schema) => schema["rdfs:label"],
  ),
  searchResults: [],
};

export default function searchData(action, state = initialState) {
  switch (action.type) {
    case SET_MULTI_SELECTIONS: {
      return {
        ...state,
        searchTerms: action.searchTerms,
      };
    }
    case PERFORM_SEARCH: {
      return {
        ...state,
        searchResults: state.data.filter(
          (datum) => datum.name === action.searchTerms[0],
        ),
      };
    }
    default:
      return state;
  }
}
