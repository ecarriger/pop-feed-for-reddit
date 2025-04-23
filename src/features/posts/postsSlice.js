import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        allPosts: {}
    },
    reducers: {
        addPost: (state, action) => {
            state.allPosts[action.payload.data.id] = action.payload.data;
        },
        deleteAllPosts: (state) => {
            state.allPosts = {};
        }
    }
});

export const selectPost = (postId) => (state) => state.posts.allPosts[postId];
export const selectAllPosts = (state) => state.posts.allPosts;
export const { addPost, deleteAllPosts } = postsSlice.actions;
export default postsSlice.reducer;