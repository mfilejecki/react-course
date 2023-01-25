import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "./modalSlice";
import postReducer from "./newPostSlice";

const store = configureStore({
  reducer: { modal: modalReducer, post: postReducer },
});

export default store;
