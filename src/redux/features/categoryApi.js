import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (data) => ({
        url: "/api/category/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Categories"],
    }),
    getShowCategory: builder.query({
      query: () => `/api/category/show`,
      providesTags: ["Categories"],
      transformResponse: (response) => {
        if (!response.success) {
          throw new Error(response.message || "Failed to fetch categories");
        }
        return response;
      },
    }),
    getProductTypeCategory: builder.query({
      query: (type) => `/api/category/show/${type}`,
      providesTags: ["Categories"],
      transformResponse: (response) => {
        if (!response.success) {
          throw new Error(response.message || "Failed to fetch categories");
        }
        return response;
      },
    }),
    getAllCategories: builder.query({
      query: () => `/api/category/all`,
      providesTags: ["Categories"],
      transformResponse: (response) => {
        if (!response.success) {
          throw new Error(response.message || "Failed to fetch categories");
        }
        return response;
      },
    }),
    updateCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/category/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Categories"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/api/category/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useGetProductTypeCategoryQuery,
  useGetShowCategoryQuery,
  useGetAllCategoriesQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
