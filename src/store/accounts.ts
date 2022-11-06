import { ACCOUNT } from "redux-store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import account from "../db/db.accounts.json";

interface INITIAL_STATE {
  loading: boolean;
  accounts: ACCOUNT[];
}

const initialState: INITIAL_STATE = {
  loading: false,
  accounts: [],
};

export const loadAccounts = createAsyncThunk("accounts/load", async () => {
  const res = await Promise.resolve(account as ACCOUNT[]);
  return res;
});

const accounts = createSlice({
  name: "accounts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadAccounts.fulfilled, (state, action) => {
      state.loading=false;
      state.accounts=action.payload;
    });

    builder.addCase(loadAccounts.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(loadAccounts.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default accounts.reducer;
