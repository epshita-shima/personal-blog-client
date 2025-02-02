import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://meb-inventory-backend.vercel.app" }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});