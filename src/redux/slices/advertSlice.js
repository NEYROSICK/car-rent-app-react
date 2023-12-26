import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts, fetchAdvertsAll } from "../operations";

const advertSlice = createSlice({
  name: "adverts",
  initialState: {
    items: [],
    isLoading: true,
    isFirstFetch: true,
    error: null,
    generalCount: 0,
  },
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setAdverts(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.isFirstFetch) {
          state.isFirstFetch = false;
        }
        state.error = null;
        state.items = [...state.items, ...action.payload];
        state.count = action.payload.length;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchAdvertsAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAdvertsAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.generalCount = action.payload.length;
      })
      .addCase(fetchAdvertsAll.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setAdverts, setIsLoading } = advertSlice.actions;
export const advertReducer = advertSlice.reducer;
