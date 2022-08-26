import { createSlice } from "@reduxjs/toolkit";
import { store } from "../Store/store";

const initialState = {
  value: store.post.data,
};

const filterSlice = createSlice({
  name: "filterPost",
  initialState,
  reducers: {
    categoryfilter: (state, action) => {
      state.filter((product) => product.category === action.payload);
    },
    companyfilter: (state, action) => {
      state.filter((product) => product.company === action.payload);
    },
  },
});

export const { categoryfilter, companyfilter } = filterSlice.actions;
export default filterSlice.reducer;
