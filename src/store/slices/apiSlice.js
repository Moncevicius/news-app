import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://newsapi.org/"
    }),
    endpoints: builder => ({
            getNews: builder.query({
                query: () => "v2/top-headlines?country=us&pageSize=20&apiKey=7dfe6383db504806b564dc61c28fd0ab"
            }),
        }),
});

export const { useGetNewsQuery } = newsApi