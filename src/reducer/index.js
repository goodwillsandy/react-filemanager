import { combineReducers } from "redux";
import fileReducer from "./fileReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  fileReducer,
  searchReducer,
});

export default rootReducer;
