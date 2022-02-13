import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSliceData } from "../../Entities";
import { STATUS } from "../../interfaces";

export const authAdapter = createEntityAdapter<AuthSliceData>()

const authSlice = createSlice({
    name: "auth",
    initialState: authAdapter.getInitialState({
        isAuthenticated: false,
        status: "default",
        errorText: "",
        isInitiated: false,
        loading: false
    }),
    reducers: {
        setAuthenticated(state, action: PayloadAction<boolean>) {
            state.isAuthenticated = action.payload
        },
        setIntitiated(state, action: PayloadAction<boolean>) {
            state.isInitiated = action.payload
        },
        status(state, action: PayloadAction<STATUS>) {
            state.status = action.payload
        },
        errorText(state, action: PayloadAction<string>) {
            state.errorText = action.payload
        },
        loading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        },
    }
})
export const { setAuthenticated, setIntitiated, status, errorText, loading } = authSlice.actions
export default authSlice.reducer
