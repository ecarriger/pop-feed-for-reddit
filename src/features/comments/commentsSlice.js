import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        allcomments: []
    },
    reducers: {
        addcomment: (state, action) => {
            state.allcomments.push(action.payload);
        }
    }
});

export const { addcomment } = commentsSlice.actions;
export default commentsSlice.reducer;