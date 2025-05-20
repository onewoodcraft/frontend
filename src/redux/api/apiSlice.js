import Cookies from "js-cookie";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Use environment variable with fallback
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://backend-8rnq.onrender.com';

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      // Add default Content-Type header
      headers.set('Content-Type', 'application/json');
      
      // Try to get auth token from cookies
      try {
        const userInfo = Cookies.get('userInfo');
        if (userInfo) {
          const user = JSON.parse(userInfo);
          if (user?.accessToken) {
            headers.set("Authorization", `Bearer ${user.accessToken}`);
          }
        }
      } catch (error) {
        console.error('Error parsing user info:', error);
      }
      
      return headers;
    },
    // Add custom error handling
    responseHandler: async (response) => {
      if (!response.ok) {
        // Log detailed error info for debugging
        const errorData = await response.text();
        console.error(`API Error (${response.status}):`, errorData);
        
        // Throw a more informative error
        const error = new Error(response.statusText);
        error.status = response.status;
        error.data = errorData;
        throw error;
      }
      return response.json();
    },
  }),
  // Add retry logic for network failures
  keepUnusedDataFor: 300, // Cache data for 5 minutes
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 30, // Refetch after 30 seconds
  endpoints: (builder) => ({}),
  tagTypes: ["Products","Coupon","Product","RelatedProducts","UserOrder","UserOrders","ProductType","OfferProducts","PopularProducts","TopRatedProducts"]
});