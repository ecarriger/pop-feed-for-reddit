import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        allPosts: []
    },
    reducers: {
        addPost: (state, action) => {
            state.allPosts.push(action.payload);
        }
    }
});

export const selectPosts = (state) => state.posts.allPosts;
export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;