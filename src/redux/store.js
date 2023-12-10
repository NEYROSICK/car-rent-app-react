import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { advertReducer } from "./advertSlice";
import { filterReducer } from "./filterSlice";

const rootReducer = combineReducers({
  adverts: advertReducer,
  filters: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
