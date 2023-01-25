import { createSlice } from "@reduxjs/toolkit";

type SliceState = {
  posts: {
    description: string;
    name: string;
  }[];
};

const postInitialState: SliceState = {
  posts: [],
};

const postSlice = createSlice({
  name: "newPage",
  initialState: postInitialState,
  reducers: {
    addPost: (state, action) => {
      state.posts = [...action.payload, state.posts];
    },
    fetchPosts: (state, action) => {
      state.posts = [...action.payload];
    },
  },
});

export const postActions = postSlice.actions;
export default postSlice.reducer;
