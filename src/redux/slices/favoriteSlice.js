import { createSlice } from "@reduxjs/toolkit";
import { fetchAdvertsAll } from "../operations";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    idList: [],
    items: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    toggleFavorite(state, action) {
      const isFavoriteAvailable = state.idList.find((id) => id === action.payload);
      if (!isFavoriteAvailable) {
        state.idList = [...state.idList, action.payload];
      } else {
        state.idList = state.idList.filter((id) => id !== action.payload);
      }
    },
    setFavorites(state, action) {
      state.isLoading = true;
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvertsAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAdvertsAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchAdvertsAll.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { toggleFavorite, setFavorites } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
