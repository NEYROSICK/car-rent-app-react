import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";

const advertSlice = createSlice({
  name: "adverts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    count: 12,
    page: 1,
  },
  reducers: {
    // resetAdvertState(state) {
    //   return { items: [], isLoading: false, error: null, count: 12 };
    // },
    setPage(state, action) {
      console.log(action.payload);
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (state.page === 1) {
          state.items = action.payload;
        } else {
          state.items = [...state.items, ...action.payload];
        }
        state.count = action.payload.length;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError, setPage } = advertSlice.actions;
export const advertReducer = advertSlice.reducer;
