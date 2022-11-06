import { ACCOUNT, SELECTED_ACCOUNTS } from "redux-store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import account from "../db/db.accounts.json";
import { PERMISSIONS } from "../types/customComponents";

interface INITIAL_STATE {
  loading: boolean;
  accounts: ACCOUNT[];
  selected: { [id: string]: SELECTED_ACCOUNTS };
}

const initialState: INITIAL_STATE = {
  loading: false,
  accounts: [],
  selected: {},
};

export const loadAccounts = createAsyncThunk("accounts/load", async () => {
  const res = await Promise.resolve(account as ACCOUNT[]);
  return res;
});

const accounts = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    setSelectedAccount(
      state,
      action: {
        type: string;
        payload: { accounts: ACCOUNT[]; permission: PERMISSIONS };
      }
    ) {
      const res: any = {};
      action.payload.accounts.forEach((account) => {
        res[account.id] = {
          ...account,
          permission: action.payload.permission,
        };
      });
      state.selected = res;
    },
    editPermissionOfId(
      state,
      action: { type: string; payload: { id: string; permission: PERMISSIONS } }
    ) {
      state.selected[action.payload.id].permission = action.payload.permission;
    },
  },
  extraReducers(builder) {
    builder.addCase(loadAccounts.fulfilled, (state, action) => {
      state.loading = false;
      state.accounts = action.payload;
    });

    builder.addCase(loadAccounts.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(loadAccounts.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { setSelectedAccount } = accounts.actions;
export default accounts.reducer;
