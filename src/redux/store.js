import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { filtersReducer } from "../redux/filters/slice";
import { eventsReducer } from "../redux/events/slice";

const eventsPersistConfiguration = {
  key: "events",
  storage,
  whitelist: ["currentPage"],
};

// const authPersistConfiguration = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };

export const store = configureStore({
  reducer: {
    // filters: filtersReducer,
    events: persistReducer(eventsPersistConfiguration, eventsReducer),
    // auth: persistReducer(authPersistConfiguration, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
