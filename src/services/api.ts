import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
    //* Enviar produtos para a API de checkout
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        //? A API retorna um id com o nome orderId
        url: "checkout",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetRestaurantsQuery, usePurchaseMutation } = api;
export default api;
