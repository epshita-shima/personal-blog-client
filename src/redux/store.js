import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from "./api/apiSlice";

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
 
});
setupListeners(store.dispatch);
export default store;