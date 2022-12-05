import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from "../components/Navbar"
import HomeScreen from "../pages/HomeScreen"
import EquipoScreen from "../pages/EquipoScreen"
import ContactoScreen from "../pages/ContactoScreen"
import ErrorScreen from "../pages/ErrorScreen"
import Header from "../components/Header"

const RoutesApp = () => {

    return (

        <>
            {/* <Navbar/> */}
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/equipo" element={<EquipoScreen/>}/>
                <Route path="/contacto" element={<ContactoScreen/>}/>
                <Route path="/header" element={<Header/>}/>

                <Route path="/*" element={<ErrorScreen/>}/>

                {/* <Route path="*" element={<ErrorScreen/>}/>   */}
            </Routes>
        </>
    )
}

export default RoutesApp