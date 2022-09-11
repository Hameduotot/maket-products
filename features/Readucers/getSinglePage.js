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
      const { id } = action.payload;

      if (Object.keys(state.card).includes(id)) {
        state.card[id] = {
          ...action.payload,
          numbersItem:
            state.card[id].numbersItem < state.card[id].stockstate.card[id].numbersItem
              ? state.card[id].numbersItem + 1
              : state.card[id].numbersItem,
        };
      } else {
        state.card[id] = { ...action.payload, numbersItem: 1 };
      }
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
