import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './features/posts/postsSlice'
import commentsSlice from './features/comments/commentsSlice'

const store = configureStore({
    reducer: {
        posts: postsSlice,
        comments: commentsSlice
    }
});

export default store;