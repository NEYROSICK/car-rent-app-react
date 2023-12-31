import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts, getAdvertCount } from "../operations";

const advertSlice = createSlice({
  name: "adverts",
  initialState: {
    items: [],
    isLoading: true,
    error: null,
    generalCount: 0,
  },
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setAdverts(state, action) {
      state.isLoading = true;
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdvertCount.fulfilled, (state, action) => {
        state.error = null;
        state.generalCount = action.payload;
      })
      .addCase(getAdvertCount.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchAdverts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setAdverts, setIsLoading } = advertSlice.actions;
export const advertReducer = advertSlice.reducer;
