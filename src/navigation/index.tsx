import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {useSelector} from 'react-redux'
import { RootState } from "../Store/index"


const Navigation: React.FC = () => {
   const {isAuthenticated} = useSelector((state: RootState)=>({
    isAuthenticated: state.auth.isAuthenticated
   }))
    return (
        <>
            <BrowserRouter>
                {
                    isAuthenticated ? 
                    <Routes>

                    </Routes>
                    :
                    <Routes>

                    </Routes>
                }
            </BrowserRouter>,
        </>
    )
}
export { Navigation }