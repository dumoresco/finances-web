import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Transaction } from "../../../pages/Home";
import api from "../../../config/api";
import { AxiosResponse } from "axios";
import { RootState } from "../../store";

interface Transactions {
  transactions: Array<Transaction>;
  isFetching: boolean;
  error: string;
}

const initialState: Transactions = {
  transactions: [],
  isFetching: false,
  error: "",
};

const reducers = {
  setTransactions: (
    state: Transactions,
    action: { payload: Array<Transaction> }
  ) => {
    state.transactions = action.payload;
  },
};

const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",

  async () => {
    const response: AxiosResponse = await api.get(
      "/transaction?year=2021&month=7"
    );
    const transactions = await response.data;
    return transactions;
  }
);

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.isFetching = true;
        state.error = "";
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isFetching = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload as string;
      });
  },
});

export const { setTransactions } = transactionsSlice.actions;

export { fetchTransactions };

export default transactionsSlice.reducer;

export const selectTransactions = (state: RootState): Transaction[] =>
  state.transactions.transactions;
export const selectIsFetching = (state: RootState): boolean =>
  state.transactions.isFetching;
