import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IInitialUserState } from "./user.interface";

const initialState: IInitialUserState = {
    user: {},
    token: "",
    loading: false,
    loggedIn: false,
    error: "",
}


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
       // actions
    setLoading: (state, action: PayloadAction<boolean>) => {
        state.loading = action.payload;
      },
      setUser: (state, action: PayloadAction<IInitialUserState["user"]>) => {
        state.user = action.payload;
      },
      setLoggedIn: (state, action: PayloadAction<boolean>) => {
        state.loggedIn = action.payload;
      },
      setToken: (state, action: PayloadAction<IInitialUserState["token"]>) => {
        state.token = action.payload;
      },
      setError: (state, action: PayloadAction<IInitialUserState["error"]>) => {
        state.error = action.payload;
      },
      setReset: (state) => {
        state = initialState;
      }
    }
})

export const { setLoading, setUser, setLoggedIn, setToken, setError, setReset } = userSlice.actions;