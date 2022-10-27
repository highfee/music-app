import { configureStore } from "@reduxjs/toolkit";

import { shazamCoreApi } from "./services/shazam";
import playerReducer from "./slices/playerSlice";
import backgroundSlice from "./slices/backgroundSlice";

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
    background: backgroundSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
