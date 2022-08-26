import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  filteredData: null,
};

export const fetchData = createAsyncThunk("getPost/Product", async () => {
  return await axios
    .get("https://course-api.com/react-store-products")
    .then((data) => data.data);
});

export const getProduct = createSlice({
  name: "getPost",
  initialState,
  reducers: {
    filterColor: {
      reducer(state, action) {
        const { data, category } = action.payload;
        if (category === "all") {
          state.filteredData = data;
        } else {
          state.filteredData = data.filter((p) => p.category === category);
        }
      },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
export const { filterColor } = getProduct.actions;
export default getProduct.reducer;
