// Cria o auth reducer

// Path: src/redux/reducers/auth/auth.reducer.ts

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../config/api";
import { RootState } from "../../store";
import { toast } from "react-toastify";

export interface AuthState {
  token: string;
  isAuthenticated: boolean;
  isFetching: boolean;
  user: object;
  error?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

const signIn = createAsyncThunk(
  "auth/signIn",
  async (payload: LoginPayload) => {
    try{
      const response = await api.post("/signin", payload)

      return response.data;
    }catch(error){ 
      console.log(error)
      }
  
  }
);

const signUp = createAsyncThunk(
  "auth/signUp",
  async (payload: RegisterPayload) => {
    console.log(payload);
    const response = await api.post("/signup", payload);

    console.log(response);

    if (response.status === 200) {
      console.log("deu certo");

      return response.data;
    }
  }
);

const initialState: AuthState = {
  token: "",
  isAuthenticated: false,
  isFetching: false,
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      window.localStorage.removeItem("token");
      state.isAuthenticated = false;
      state.token = "";

      window.location.href = "/login";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isFetching = true;
        state.error = "";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isFetching = false;
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;

export const { logout } = authSlice.actions;

export const selectIsFetching = (state: RootState): boolean =>
  state.auth.isFetching;
export const selectUser = (state: RootState): object => state.auth.user;
export const selectError = (state: RootState): string | undefined =>
  state.auth.error;
export const selectIsAuthenticated = (state: RootState): boolean =>
  state.auth.isAuthenticated;
export const selectToken = (state: RootState): string => state.auth.token;
export const selectAuth = (state: RootState): AuthState => state.auth;
export { signIn, signUp };
