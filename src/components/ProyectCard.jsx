import React from 'react'
import {Link, NavLink} from "react-router-dom"
import render1 from "../assets/render1.jpg"
import render2 from "../assets/render2.jpg"
import render3 from "../assets/render3.jpg"
import logo from "../assets/logo-nav.svg"


import "../css/ProyectCard.css"




const ProyectCard = () => {


//Aca tengo que hacer una funcion y que haga un mapeo para rellenar las fotos del carousel con fotos del proyecto que se quiere mostrar. Tengo que buscar por el id, desp mapear el objeto y a las imagenes que tenga cargarlas al carousel


    return (

        <>

            <nav class="navbar navbar-expand-lg navbar-light fixed-top">
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
                        <ul class="navbar-nav ml-auto mb-2 mb-lg-0 listaLinks">
                            <li class="nav-item active">
                                <NavLink class="nav-link active navLink" aria-current="page" to="/">Inicio</NavLink>
                            </li>
                            <li class="nav-item dropdown">
                                <NavLink class="nav-link dropdown-toggle navLink active" to="/proyectos" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Proyectos</NavLink>
                                <ul class="dropdown-menu bg" aria-labelledby="navbarDropdown">
                                    <li><NavLink class="dropdown-item navLink navbar-nav" to="/*">Residencial</NavLink>
                                    </li>
                                    <li><NavLink class="dropdown-item navLink " to="/*">Comercial</NavLink></li>
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
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={render1} class="d-block w-100"/>
                    </div>
                    <div class="carousel-item">
                        <img src={render2} class="d-block w-100"/>
                    </div>
                    <div class="carousel-item">
                        <img src={render3} class="d-block w-100"/>
                    </div>
                    <div class="carousel-item">
                        <img src={render1} class="d-block w-100"/>
                    </div>
                    <div class="carousel-item">
                        <img src={render2} class="d-block w-100"/>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="card cardMia">
                    <div class="col">
                        <div class="card-body">
                            <h3 class="card-title">Benito Santos</h3>
                            <hr />
                            <ul>
                                <li><h5><b>Año:</b></h5></li>
                                <li><h5><b>Superficie:</b></h5></li>
                                <li><h5><b>Ubicacion:</b></h5></li>
                            </ul>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProyectCard