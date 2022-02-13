import { STATUS } from "../interfaces";


export type AuthSliceData = {
    isAuthenticated: boolean
    status: STATUS
    errorText: string
    isInitiated:boolean
    loading:boolean
}