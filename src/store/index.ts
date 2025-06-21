import { configureStore } from "@reduxjs/toolkit";
import efoodApi from "../services/api";
import modalReducer from "./reducers/modal-reducer";
import cartReducer from "./reducers/cart-reducer";

export const store = configureStore({
  reducer: {
    [efoodApi.reducerPath]: efoodApi.reducer,
    modal: modalReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(efoodApi.middleware),
});

export type RootReducer = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
