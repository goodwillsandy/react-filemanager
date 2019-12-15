import { createStore } from "redux";
import rootReducer from "../reducer";
import { fs } from "../constants";

const initalState = {
  fileReducer: {
    fs: { ...fs },
    currentParent: 0
  }
};

const store = createStore(
  // root reducer
  rootReducer,
  //   intial state
  initalState,
  //redux debugger
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
