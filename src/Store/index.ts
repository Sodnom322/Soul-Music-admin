import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/index"


const store = configureStore({
    reducer: {
     auth: authReducer
    }
})

export {store}
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;