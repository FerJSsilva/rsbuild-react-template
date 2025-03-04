import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { apiSlice } from './api/apiSlice';

// Configuração da store do Redux
export const store = configureStore({
  reducer: {
    // Adiciona o reducer do apiSlice com o nome definido em reducerPath
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // Adiciona os middlewares do RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  // Ativa o dev tools apenas em desenvolvimento
  devTools: process.env.NODE_ENV !== 'production',
});

// Configuração opcional para refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch);
