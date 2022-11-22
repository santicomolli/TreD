import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from "../components/Navbar"
import HomeScreen from "../pages/HomeScreen"
import EquipoScreen from "../pages/EquipoScreen"
import ErrorScreen from "../pages/ErrorScreen"

const RoutesApp = () => {

    return (

        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/equipo" element={<EquipoScreen/>}/>
                <Route path="/*" element={<ErrorScreen/>}/>

                {/* <Route path="*" element={<ErrorScreen/>}/>   */}
            </Routes>
        </>
    )
}

export default RoutesApp