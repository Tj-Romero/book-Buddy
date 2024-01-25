// Import createApi (function to create an API service) and fetchBaseQuery (a basic fetch wrapper)
// from Redux Toolkit Query's React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define an API using createApi
export const libraryApi = createApi({
	// Unique string used in constructing Redux action types, state selectors, and React hook names
	reducerPath: "libraryApi",
	// Define a base query function that all endpoints will use as the base of their request
	baseQuery: fetchBaseQuery({
		baseUrl: "https://fsa-book-buddy-b6e748d1380d.herokuapp.com",
		prepareHeaders: (headers, { getState }) => {
			const token = localStorage.getItem('token');
			if (token) {
                headers.set('Authorization', `Bearer ${token}`);
                headers.set('Content-Type','application/json');
            }
			return headers;
		},
	}),	
	// Define endpoints for our API service
	endpoints: (builder) => ({
		// Define an endpoint that fetches books
		getBooks: builder.query({
			query: () => "/api/books",
		}),
		getBook: builder.query({
			query: (id) => `/api/books/${id}`,
		}),
		getAccount: builder.query({
            query: (token) => ({
                url: '/api/users/me',
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })
		}),
        getReservations: builder.query({
            query: () => ({
                url: '/api/reservations',
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        }),
		// Auth endpoints
        register: builder.mutation({
            query: (user) => ({
                url: '/api/users/register',
                method: "POST",
                body: user,
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        }), 
        login: builder.mutation({
            query: (user) => ({
                url: '/api/users/login',
                method: "POST",
                body: user,
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        }),
		checkout: builder.mutation({
            query: (user) => ({
                url: '/api/users/checkout',
                method: "POST",
                body: user,
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        }),
	})
});

// Export hooks for each endpoint - in this case, React hooks for queries and mutations
export const {
    useGetBooksQuery,
    useGetBookQuery,
    useRegisterMutation,
    useLoginMutation,
	useCheckoutMutation,
	useGetAccountQuery,
    useGetReservationsQuery
} = libraryApi;
