import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://64eb12d7e51e1e82c576f8a0.mockapi.io/' }),
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => 'contacts',
        }),
    }),
});

export const { useGetContactsQuery } = contactsApi;

