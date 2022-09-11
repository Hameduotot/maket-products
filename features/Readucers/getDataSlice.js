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
    filterCategory: {
      reducer: (state, action) => {
        const { data, category } = action.payload;
        if (category === "all") {
          state.filteredData = data;
        } else {
          state.filteredData = data.filter((p) => p.category === category);
        }
      },
      prepare: (data, category) => {
        return { payload: { data, category } };
      },
    },
    filterColorList: (state, action) => {
      let result = [];
      action.payload.data.map((elm) => {
        if (action.payload.color === "all") {
          state.filteredData = action.payload.data;
        }
        if (elm.colors.includes(action.payload.color)) {
          result = [...result, elm];
          state.filteredData = result;
        }
      });
    },
    filterPriceList: (state, action) => {
      let result = [];
      action.payload.data.filter((elm) => {
        if (elm.price / 100 < action.payload.value) {
          result = [...result, elm];
          state.filteredData = result;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
export const { filterCategory, filterColorList, filterPriceList } =
  getProduct.actions;
export default getProduct.reducer;
