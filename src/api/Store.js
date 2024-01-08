import { configureStore } from "@reduxjs/toolkit";
import { ProductApi } from "./ProductApi";
import CartSlice from "./ProductSlice/CartSlice";
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
// import { AmazonApi } from "./ProductSlice/AmazonProducts";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// const persistedReducer = persistReducer(persistConfig, CartSlice);

const store = configureStore({
  reducer: {
    cart: CartSlice,
    // [AmazonApi.reducerPath]: AmazonApi.reducer,
    [ProductApi.reducerPath]: ProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
  // .concat(AmazonApi.middleware),
});

export default store;
// export let persistor = persistStore(store);
