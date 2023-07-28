import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../config/api";
import { AxiosResponse } from "axios";
import { RootState } from "../../store";
import { Transaction } from "../../../types/transactions";

interface Transactions {
  transactions: Array<Transaction>;
  isFetching: boolean;
  isFetchingAddTransaction: boolean;
  error: string;
}

const initialState: Transactions = {
  transactions: [],
  isFetching: false,
  isFetchingAddTransaction: false,
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

// fetch transactions
interface PayloadFetchTransactions {
  year: number;
  month: number;
}
export interface PayloadAddTransaction {
  description: string;
  amount: number;
  due_date: string;
  total_installments?: number;
  user_id?: number;
  paid?: boolean;
  is_recurring?: boolean;
  category_id?: number;
  type?: string;
}

// 'description'
// 'amount'
// 'due_date'
// 'user_id'
// 'total_installments'
// 'paid'
// 'is_recurring'
// 'category_id'
// 'type'

const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",

  async (payload: PayloadFetchTransactions) => {
    const { year, month } = payload;

    const response: AxiosResponse = await api.get(
      `/transaction?year=${year}&month=${month}`
    );
    const transactions = await response.data;
    return transactions;
  }
);

const addTransaction = createAsyncThunk(
  "transactions/addTransaction",

  async (payload: PayloadAddTransaction) => {
    const {
      description,
      amount,
      due_date,
      total_installments,
      paid,
      is_recurring,
      category_id,
      type,
    } = payload;

    // passa por body o ano e o mês

    const response: AxiosResponse = await api.post(`/transaction`, {
      description,
      amount,
      due_date,
      total_installments,
      paid,
      is_recurring,
      category_id,
      type,
      user_id: 1,
    });
    console.log("[RESPONSE] ", response);
    return response;
    // chama o fetchTransactions para atualizar a lista de transações
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
      })
      .addCase(addTransaction.pending, (state) => {
        state.isFetchingAddTransaction = true;
        state.error = "";
      })
      .addCase(addTransaction.fulfilled, (state) => {
        state.isFetchingAddTransaction = false;
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.isFetchingAddTransaction = false;
        state.error = action.payload as string;
      });
  },
});

export const { setTransactions } = transactionsSlice.actions;

export { fetchTransactions, addTransaction };

export default transactionsSlice.reducer;

export const selectTransactions = (state: RootState): Transaction[] =>
  state.transactions.transactions;
export const selectIsFetching = (state: RootState): boolean =>
  state.transactions.isFetching;
export const selectIsFetchingAddTransaction = (state: RootState): boolean =>
  state.transactions.isFetchingAddTransaction;
