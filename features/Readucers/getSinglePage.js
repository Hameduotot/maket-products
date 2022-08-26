// https://course-api.com/react-store-single-product?id=${id}

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
};

export const getSinglePageData = createAsyncThunk(
  "getSinglePageData",
  async (id) => {
    return await axios
      .get(`https://course-api.com/react-store-single-product?id=${id}`)
      .then((data) => data.data);
  }
);

const SinglePageProduct = createSlice({
  name: "getSinglePageData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSinglePageData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default SinglePageProduct.reducer;
