// Cria o auth reducer

// Path: src/redux/reducers/auth/auth.reducer.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  token: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: any;
}

const initialState: AuthState = {
  token: "",
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
