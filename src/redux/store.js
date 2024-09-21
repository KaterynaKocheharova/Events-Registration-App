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

// const authPersistConfiguration = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };

export const store = configureStore({
  reducer: {
    // filters: filtersReducer,
    events: eventsReducer,
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
