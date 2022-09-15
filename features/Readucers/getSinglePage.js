import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

function saveToLocalStorage(state) {
  const serialisedState = JSON.stringify(state);
  localStorage.setItem("persistantState", serialisedState);
}
const initialState = {
  data: null,
  card: {},
  local: loadFromLocalStorage(),
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
          ...state.card[id],
          numbersItem:
            state.card[id].numbersItem < state.data.stock
              ? state.card[id].numbersItem + 1
              : state.card[id].numbersItem,
        };
        saveToLocalStorage({ ...state.card });
      } else {
        state.card[id] = { numbersItem: 1, id: state.card[id] };
        saveToLocalStorage({ ...state.card });
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
