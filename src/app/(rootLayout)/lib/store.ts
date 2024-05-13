"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../../../Components/Redux/user/userSlice";
import hotelsReducer from "@/Components/Redux/hotels/myBookSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  user: userReducer,
  rooms: hotelsReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export default store;
export const persistor = persistStore(store);
