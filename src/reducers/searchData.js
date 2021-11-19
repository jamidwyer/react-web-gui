import schemas from "../mockData/schemas";

import { PERFORM_SEARCH, SET_MULTI_SELECTIONS } from "../constants/ActionTypes";

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
  searchOptions: schemas["@graph"].map((schema) => {
    console.log(schema["rdfs:label"]);
    return schema["rdfs:label"];
  }),
  searchResults: [],
};

export default function searchData(state = initialState, action) {
  switch (action.type) {
    case SET_MULTI_SELECTIONS: {
      console.log(state);
      console.log(action);
      return {
        ...state,
        searchTerms: action.searchTerms,
      };
    }
    case PERFORM_SEARCH:
      {
        console.log(state);
        console.log(action);
        return {
          ...state,
          searchResults: state.data.filter(
            (datum) => datum["name"] === action.searchTerms[0]
          ),
        };
      }
      console.log(state);
    default:
      console.log(state);
      return state;
  }
}
