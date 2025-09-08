import { combineReducers, configureStore } from "@reduxjs/toolkit";
import efoodApi from "../services/api";
import modalReducer from "./reducers/modal-reducer";
import cartReducer from "./reducers/cart-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "cart",
  storage: storageSession, //* Só persiste até fechar a janela
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const rootReducer = combineReducers({
  [efoodApi.reducerPath]: efoodApi.reducer,
  modal: modalReducer,
  cart: persistedCartReducer, //* O cartReducer agora é o persistido
});

export const store = configureStore({
  reducer: rootReducer,
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
