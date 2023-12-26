import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
    toggleFavorite(state, action) {
      const isFavoriteAvailable = state.items.find((id) => id === action.payload);

      if (!isFavoriteAvailable) {
        state.items = [...state.items, action.payload];
      } else {
        state.items = state.items.filter((id) => id !== action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
