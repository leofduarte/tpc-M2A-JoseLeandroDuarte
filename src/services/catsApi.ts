import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Cat, Breed } from '@/types/cats'

export const catsApi = createApi({
  reducerPath: 'catsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/',
    prepareHeaders: (headers) => {
      headers.set('x-api-key', import.meta.env.VITE_CAT_API_KEY)
      return headers
    }
  }),
  endpoints: (builder) => ({
    getBreeds: builder.query<Breed[], void>({
      query: () => 'breeds',
    }),
    getCats: builder.query<Cat[], void>({
      query: () => 'images/search?limit=10',
    }),
    searchCatsByBreed: builder.query<Cat[], string>({
      query: (breedId) => `images/search?limit=10&breed_ids=${breedId}`,
    }),
  }),
})

export const { useGetCatsQuery, useSearchCatsByBreedQuery, useGetBreedsQuery } = catsApi