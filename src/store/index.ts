import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userRedux/user.slice";
export const store = configureStore({
    reducer: {
        // ...reducers
        user: userSlice.reducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;