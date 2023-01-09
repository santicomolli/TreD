import {React, useState} from 'react'
import {Link, NavLink} from "react-router-dom"
import logo from "../assets/logo-nav.svg"
import logoGrande from "../assets/logoGrande.png"
import equipo from "../assets/Equipo.jpg"
import equipo2 from "../assets/equipo2.jpg"
import Footer from "../components/Footer"

import "../css/Equipo.css"

const EquipoScreen = () => {

    const [navbar, setNavbar] = useState(false);

    const changeBg = () =>{

    if(window.scrollY >= 100){
        setNavbar(true);
    }
    else
    {
        setNavbar(false);
    }}
    window.addEventListener("scroll", changeBg);
    
    return (
        <>
            <nav className={
                navbar
                ? "navbar scroll navbar-expand-lg navbar-dark fixed-top"
                : "navbar navbar-expand-lg navbar-dark fixed-top"}>
                <div className="container-fluid">
                    <div className="container">
                        <Link className="navbar-brand logoTred" to="/">
                            <img src={logoGrande} alt="logo" width="130" height="60"/>
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={logo} alt="logo" width="60" height="38"></img>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0 listaLinks">
                            <li className="nav-item active">
                                <NavLink className="nav-link active navLink" aria-current="page" to="/">Inicio</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle navLink active" to="/proyectos" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Proyectos</NavLink>
                                <ul className="dropdown-menu bg" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="dropdown-item navLink navbar-nav" to="/gastronomia">Gastronomia</NavLink></li>
                                    <li><NavLink className="dropdown-item navLink " to="/cafeteria">Cafeteria</NavLink></li>
                                    <li><NavLink className="dropdown-item navLink " to="/hogares">Hogares</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link navLink active" to="/equipo">Equipo</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container miGrid2">
                <div className="uno miDiv">
                </div>
                <div className="dos miDiv">
                    <h3 className='text-black'>Estudio</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe asperiores delectus aut atque vel molestiae nemo! Error dolorum et dolor dignissimos ipsum aliquam! Autem repudiandae, quam nulla illum sed consequuntur, odio quia doloribus hic enim debitis. Unde, quam. Reprehenderit!</p>
                    <hr />
                    <h5 className='text-black'>Equipo</h5>
                    <h6 className='text-black'>Arq 1</h6>
                    <h6 className='text-black'>Arq 2</h6>
                    <h6 className='text-black'>Arq 3</h6>
                    <h6 className='text-black'>Arq 4</h6>
                    <h6 className='text-black'>Arq 5</h6>
                    <h6 className='text-black'>Arq 6</h6>
                </div>
            </div>
            {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" interval={1000}>
                <div className="carousel-inner">
                    <div className="carousel-item active carousel-mio">
                        <img src={equipo} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5><p>Confianos tu <b>SUEÑO</b> , que en <b>TreD</b>, lo hacemos <b>REALIDAD</b>.</p></h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item carousel-mio">
                        <img src={equipo2} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                </div>
            </div> */}

            <hr id='hrHome' />

            <Footer/>
        </>
    )
}

export default EquipoScreen