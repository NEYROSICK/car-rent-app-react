import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { advertReducer } from "./advertSlice";
import { filterReducer } from "./filterSlice";
import { favoriteReducer } from "./favoriteSlice";

const rootReducer = combineReducers({
  adverts: advertReducer,
  filters: filterReducer,
  favorites: favoriteReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
