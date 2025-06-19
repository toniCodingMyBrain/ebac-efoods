import { configureStore } from "@reduxjs/toolkit";
import efoodApi from "../services/api";
import modalReducer from "./reducers/modal-reducer";

export const store = configureStore({
  reducer: {
    [efoodApi.reducerPath]: efoodApi.reducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(efoodApi.middleware),
});

export type RootReducer = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
