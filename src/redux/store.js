import { configureStore } from "@reduxjs/toolkit";
import { advertReducer } from "./advertSlice";

// const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });

export const store = configureStore({
  reducer: advertReducer,
});
