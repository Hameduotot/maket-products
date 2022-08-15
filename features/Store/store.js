import { createStore } from "redux";
import filterReducer from "../Readucers/filterReducer";

export const store = createStore(
  filterReducer,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
