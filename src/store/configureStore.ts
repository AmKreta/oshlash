import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from './accounts';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const store = configureStore({
    devTools: true,
    middleware: [logger, thunk],
    reducer: {
        accounts: accountsReducer
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;