import { combineReducers, configureStore } from "@reduxjs/toolkit";
import efoodApi from "../services/api";
import modalReducer from "./reducers/modal-reducer";
import cartReducer from "./reducers/cart-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  storage: storageSession, //* Só persiste até fechar a janela
  whitelist: ["cart"], //* Só o cart será persistido
};

const rootReducer = combineReducers({ cart: cartReducer, modal: modalReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    [efoodApi.reducerPath]: efoodApi.reducer,
    persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        //! Aqui ignoramos as ações que causam o erro de serialização
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
          "persist/PAUSE",
          "persist/FLUSH",
          "persist/PURGE",
        ],
        ignoredPaths: ["_persist"],
      },
    }).concat(efoodApi.middleware),
});

export const persistor = persistStore(store);
export type RootReducer = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
