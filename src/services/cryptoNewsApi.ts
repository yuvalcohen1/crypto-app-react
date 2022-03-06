import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { News } from "../models/News.model";

const cryptoNewsHeaders = {
  "x-bingapis-sdk": process.env.ESLINT_NO_DEV_ERRORS,
  "x-rapidapi-host": process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
  "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url: string) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query<News, { newsCategory: string; count: number }>(
      {
        query: ({ newsCategory, count }) =>
          createRequest(
            `/news/search?q=${newsCategory}&safeSearch=off&textFormat=raw&freshness=Day&count=${count}`
          ),
      }
    ),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
