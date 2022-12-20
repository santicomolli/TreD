import React from 'react'
import {Link, NavLink} from "react-router-dom"
import logo from "../assets/logo-nav.svg";
import logoGrande from "../assets/logoGrande.png"
import portada from "../assets/portada.jpg";
import portadacel from "../assets/ventana.jpg";
import render2 from '../assets/render2.jpg';
import render3 from '../assets/render3.jpg';
import "../css/Header.css"


const Header = () => {


    return (

        <>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top">
                <div class="container-fluid">
                    <div class="container">
                        <Link class="navbar-brand logoTred" to="/">
                            <img src={logoGrande} alt="logo" width="130" height="60"/>
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
                                    <li><NavLink class="dropdown-item navLink navbar-nav" to="/gastronomia">Gastronomia</NavLink></li>
                                    <li><NavLink class="dropdown-item navLink navbar-nav" to="/cafeteria">Cafeteria</NavLink></li>
                                    <li><NavLink class="dropdown-item navLink navbar-nav" to="/hogares">Hogares</NavLink></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link navLink active" to="/equipo">Equipo</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" interval={1000}>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={portada} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5><p>Confianos tu <b>SUEÑO</b> , que en <b>TreD</b>, lo hacemos <b>REALIDAD</b>.</p></h5>
                            <hr></hr>
                        </div>
                    </div>
                    {/* <div class="carousel-item">
                        <img src={render2} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p></p>
                        </div>
                    </div> */}
                    {/* <div class="carousel-item" >
                        <img src={render3} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Header