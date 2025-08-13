import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Restaurant } from "./models/restaurants-types";

const api = createApi({
  reducerPath: "efoodApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ebac-fake-api.vercel.app/api/efood/",
  }),
  endpoints: (builder) => ({
    //* Obter a lista dos restaurantes
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => "restaurantes",
    }),
  }),
});

export const { useGetRestaurantsQuery } = api;
export default api;
