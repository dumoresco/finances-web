import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authReducer from "./reducers/auth/auth.reducer";
import transactionReducer from "./reducers/transactions/transaction.reducer";

//reducers

const reducers = {
  auth: authReducer,
  transactions: transactionReducer,
};

export const store = configureStore({
  reducer: reducers,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
