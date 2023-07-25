// Cria o auth reducer

// Path: src/redux/reducers/auth/auth.reducer.ts

import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  token: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: object;
}

const initialState: AuthState = {
  token: "",
  isAuthenticated: false,
  isLoading: false,
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoading = true;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
