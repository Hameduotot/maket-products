// https://course-api.com/react-store-single-product?id=${id}

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  card: {},
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
  reducers: {
    addToCard: (state, action) => {
      if (Object.keys(state.card).includes(action.payload.id)) {
        // console.log("ggg", state.card[action.payload.id].numbersItem);
        // state.card[action.payload.id] = {
        //   ...action.payload,
        //   numbersItem: 2,
        // };
        state.card[action.payload.id] = { ...state.card[action.payload.id] };
      }
      state.card[action.payload.id] = { ...action.payload, numbersItem: 1 };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSinglePageData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { addToCard } = SinglePageProduct.actions;
export default SinglePageProduct.reducer;
