import { apiSlice } from './apiSlice';

export const postsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Obter todos os posts
    getPosts: builder.query({
      query: () => '/posts',
      providesTags: ['Posts']
    }),
    
    // Obter um post específico por ID
    getPost: builder.query({
      query: (id) => `/posts/${id}`,
      providesTags: (result, error, id) => [{ type: 'Posts', id }]
    }),
    
    // Obter comentários de um post
    getPostComments: builder.query({
      query: (postId) => `/posts/${postId}/comments`,
      providesTags: (result, error, postId) => [{ type: 'Posts', id: `${postId}-comments` }]
    }),
    
    // Adicionar um novo post
    addPost: builder.mutation({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post
      }),
      invalidatesTags: ['Posts']
    }),
    
    // Atualizar um post existente
    updatePost: builder.mutation({
      query: ({ id, ...post }) => ({
        url: `/posts/${id}`,
        method: 'PUT',
        body: post
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Posts', id }]
    }),
    
    // Excluir um post
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Posts', id }]
    })
  })
});

// Hooks gerados automaticamente
export const {
  useGetPostsQuery,
  useGetPostQuery,
  useGetPostCommentsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation
} = postsApi;
