import React from 'react'
import logo from "../assets/logo-nav.svg"
import render1 from '../assets/render1.jpg';
import render2 from '../assets/render2.jpg';
import render3 from '../assets/render3.jpg';
import "../css/Header.css"


const Header = () => {

    return (

        <>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
                <div class="container-fluid">
                    <div class="container">
                        <a class="navbar-brand logoTred" to="/">
                            <img src={logo} alt="logo" width="60" height="38"/>
                        </a>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={logo} alt="logo" width="60" height="38"></img>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link active navLink" aria-current="page" to="/">Inicio</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle navLink active" to="/proyectos" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Proyectos</a>
                                <ul class="dropdown-menu bg" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item navLink navbar-nav" to="/*">Residencial</a></li>
                                    <li><a class="dropdown-item navLink " to="/*">Comercial</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link navLink active" to="/equipo">Equipo</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link navLink active" to="/contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={render1} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={render2} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={render3} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header