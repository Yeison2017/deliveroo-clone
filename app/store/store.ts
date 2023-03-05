import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "./slices/basketSlice";
import { restaurantSlice } from "./slices/restaurantSlice";

export const store = configureStore({
  reducer: {
    basket: basketSlice.reducer,
    restaurant: restaurantSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
