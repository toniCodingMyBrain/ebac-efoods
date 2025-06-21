import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Restaurant } from "./restaurants-types";

const api = createApi({
  reducerPath: "efoodApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood/",
  }),
  endpoints: (builder) => ({
    //* Obter a lista dos restaurantes
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => "restaurantes",
    }),
    //* obter a lista de pratos de cada restaurante
    getItaliana: builder.query<Restaurant, void>({
      query: () => `restaurantes/1`,
    }),
  }),
});

export const { useGetRestaurantsQuery, useGetItalianaQuery } = api;
export default api;
