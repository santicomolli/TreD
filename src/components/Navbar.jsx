import React from 'react'
import logo from "../assets/logo-nav.svg"
import "../css/Navbar.css"
import {Link, NavLink} from "react-router-dom"



const Navbar = () => {

    return (

            <nav class="navbar navbar-expand-lg navmio sticky-top">
                <div class="container-fluid">
                    <div class="container">
                        <Link class="navbar-brand logoTred" to="/">
                            <img src={logo} alt="logo" width="60" height="38"/>
                        </Link>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={logo} alt="logo" width="60" height="38"></img>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 listaLinks">
                            <li class="nav-item">
                                <NavLink class="nav-link active navLink" aria-current="page" to="/">Inicio</NavLink>
                            </li>
                            <li class="nav-item dropdown">
                                <NavLink class="nav-link dropdown-toggle navLink active" to="/proyectos" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Proyectos</NavLink>
                                <ul class="dropdown-menu bg" aria-labelledby="navbarDropdown">
                                    <li><NavLink class="dropdown-item navLink" to="/*">Residencial</NavLink></li>
                                    <li><NavLink class="dropdown-item navLink" to="/*">Comercial</NavLink></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link navLink active" to="/equipo">Equipo</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link navLink active" to="/contacto">Contacto</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

    )
}

export default Navbar
