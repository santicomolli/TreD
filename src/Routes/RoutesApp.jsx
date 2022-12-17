import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import Navbar from "../components/Navbar"
import HomeScreen from "../pages/HomeScreen"
import EquipoScreen from "../pages/EquipoScreen"
import ErrorScreen from "../pages/ErrorScreen"
import ProyectCard from "../components/ProyectCard"
import GridHogares from "../components/GridHogares"
import GridCafeteria from "../components/GridCafeteria"
import GridGastronomia from "../components/GridGastronomia"


const RoutesApp = () => {

    return (

        <>
            {/* <Navbar/> */}
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/equipo" element={<EquipoScreen/>}/>
                <Route path="/card" element={<ProyectCard/>}/>
                <Route path="/hogares" element={<GridHogares/>}/>
                <Route path="/gastronomia" element={<GridGastronomia/>}/>
                <Route path="/cafeteria" element={<GridCafeteria/>}/>


                <Route path="/*" element={<ErrorScreen/>}/>

                {/* <Route path="*" element={<ErrorScreen/>}/>   */}
            </Routes>
        </>
    )
}

export default RoutesApp