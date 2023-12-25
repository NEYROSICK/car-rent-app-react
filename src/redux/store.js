import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { advertReducer } from "./slices/advertSlice";
import { filterReducer } from "./slices/filterSlice";
import { favoriteReducer } from "./slices/favoriteSlice";

import storage from "redux-persist/lib/storage";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const favoritePersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  adverts: advertReducer,
  filters: filterReducer,
  favorites: persistReducer(favoritePersistConfig, favoriteReducer),
});

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export const persistor = persistStore(store);
