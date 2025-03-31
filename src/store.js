import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './features/posts/postsSlice'
import commentsSlice from './features/comments/commentsSlice'

export const setupStore = preloadedState => {
    return configureStore({
        reducer: {
            posts: postsSlice,
            comments: commentsSlice
        },
        preloadedState
    });
};