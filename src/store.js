import { createStore, combineReducers } from "redux";

const reducers = {};

const rootReducer = combineReducers(reducers);

// eslint-disable-line no-underscore-dangle
const configureStore = () =>
  createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && // eslint-disable-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
  );

export default configureStore;
