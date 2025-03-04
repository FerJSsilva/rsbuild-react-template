// RTK Query API base
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// API base com configurações padrão
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://jsonplaceholder.typicode.com',
    prepareHeaders: (headers) => {
      // Você pode adicionar headers padrão aqui
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Posts', 'Users'],
  endpoints: () => ({}),
});
