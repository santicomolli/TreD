import React from 'react'
import {Link, NavLink} from "react-router-dom"
import logo from "../assets/logo-nav.svg"
import equipo from "../assets/equipo.jpg"
import equipo2 from "../assets/equipo2.jpg"
import Footer from "../components/Footer"

import "../css/Equipo.css"

const EquipoScreen = () => {

    return (
        <>
            <nav class="navbar navscroll navbar-expand-lg navbar-light fixed-top">
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
                                    <li><NavLink class="dropdown-item navLink navbar-nav" to="/*">Residencial</NavLink></li>
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


            <div>
                <div class="carousel-inner">
                    <div class="carousel-item active carousel-mio">
                        <img src={equipo} class="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>

            <hr id='hrHome' />

            <div className="container mb-5 container-mio">
                <div className="row">
                    <div className="col-md-12 text-white">
                        <h1>Equipo</h1>
                    </div>

                    <div className="sub-container">
                        <div className="teams">
                            <img src="https://ph-files.imgix.net/2fb378d7-0035-4a85-817c-e819d8f5dbaa.png?auto=format&auto=compress&codec=mozjpeg&cs=strip" alt="" />
                            <div className="name">Nombre 1</div>
                            <div className="desig">Jefe</div>
                            <div className="about">
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing  elit. Optio, ab!
                                </p>
                            </div>

                            <div className="social-links">
                                <a href="#" className="fa fa-facebook"></a>
                                <a href="#" className="fa fa-instagram"></a>
                                <a href="#" className="fa fa-twitter"></a>
                            </div>
                        </div>

                        <div className="teams">
                        <img src="https://ph-files.imgix.net/2fb378d7-0035-4a85-817c-e819d8f5dbaa.png?auto=format&auto=compress&codec=mozjpeg&cs=strip" alt="" />
                            <div className="name">Nombre 2</div>
                            <div className="desig">Diseñador</div>
                            <div className="about">
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ab!
                                </p>
                            </div>

                            <div className="social-links">
                                <a href="#" className="fa fa-facebook"></a>
                                <a href="#" className="fa fa-instagram"></a>
                                <a href="#" className="fa fa-twitter"></a>
                            </div>
                        </div>

                        <div className="teams">
                        <img src="https://ph-files.imgix.net/2fb378d7-0035-4a85-817c-e819d8f5dbaa.png?auto=format&auto=compress&codec=mozjpeg&cs=strip" alt="" />
                            <div className="name">Nombre 3</div>
                            <div className="desig">Limpieza</div>
                            <div className="about">
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing  elit. Optio, ab!
                                </p>
                            </div>
                            <div className="social-links">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                            </div>
                        </div>

                        <div className="teams">
                        <img src="https://ph-files.imgix.net/2fb378d7-0035-4a85-817c-e819d8f5dbaa.png?auto=format&auto=compress&codec=mozjpeg&cs=strip" alt="" />
                            <div className="name">Nombre 3</div>
                            <div className="desig">Limpieza</div>
                            <div className="about">
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing  elit. Optio, ab!
                                </p>
                            </div>
                            <div className="social-links">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                            </div>
                        </div>
                        
                        <div className="teams">
                        <img src="https://ph-files.imgix.net/2fb378d7-0035-4a85-817c-e819d8f5dbaa.png?auto=format&auto=compress&codec=mozjpeg&cs=strip" alt="" />
                            <div className="name">Nombre 3</div>
                            <div className="desig">Limpieza</div>
                            <div className="about">
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing  elit. Optio, ab!
                                </p>
                            </div>
                            <div className="social-links">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default EquipoScreen