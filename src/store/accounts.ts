import {ACCOUNT} from "redux-store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface INITIAL_STATE {
    loading: boolean;
    accounts: ACCOUNT[];
};

const initialState: INITIAL_STATE = {
    loading: false,
    accounts: []
}

export const loadAccounts = createAsyncThunk<ACCOUNT[]>('accounts/load', () => {
    return [];
})

const accounts = createSlice({
    name: 'accounts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(loadAccounts.fulfilled, (state, action) => {

        });

        builder.addCase(loadAccounts.pending, (state, action) => {

        });

        builder.addCase(loadAccounts.rejected, (state, action) => {

        })
    }
});

export default accounts.reducer;