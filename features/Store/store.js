import { configureStore } from "@reduxjs/toolkit";
import getDataReducer from "../Readucers/getDataSlice";
import getSinglePage from "../Readucers/getSinglePage";

export const store = configureStore({
  reducer: {
    post: getDataReducer,
    singlePageData: getSinglePage,
  },
});
