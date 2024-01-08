import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://asos2.p.rapidapi.com";
const headersApi = {
  "X-RapidAPI-Key": "242b73823fmsh0dcd0d4b3800d1bp14cb15jsnb45fdbb4b78e",
  "X-RapidAPI-Host": "asos2.p.rapidapi.com",
};

const createrequest = (url) => ({ url, headers: headersApi });

export const ProductApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ category, offset, limit }) =>
        createrequest(
          `/products/v2/list?store=US&offset=${offset}&categoryId=${category}&limit=${limit}`
        ),
    }),
    getSimilair: builder.query({
      query: (similairId) =>
        createrequest(`/products/v3/list-similarities?id=${similairId}`),
    }),

    getProductDetails: builder.query({
      query: (id) => createrequest(`/products/v3/detail?id=${id}`),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSimilairQuery,
  useGetProductDetailsQuery,
} = ProductApi;
