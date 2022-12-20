import React from 'react'
import {Link, NavLink} from "react-router-dom"
import logoGrande from "../assets/logoGrande.png"
import logo from "../assets/logo-nav.svg";
import foto1 from "../assets/render3.jpg"
import "../css/Hogares.css"

const GridHogares = () => {


    //En este grid tengo que ir cargando todos los proyectos que sean necesarios de las categorias
    // const [posts, setPosts] = useState([])
    // const registro = 0;
    // const limite = 10;  

    // const [listaDestacados, setListaDestacados] = useState([])
    
    // useEffect(()=>{
    //     getProduct(registro, limite, true ).then((respuesta)=>{
    //         setPosts(respuesta.producto)
    //     });
    // }, []);
    
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

            <div class="container miGrid">
                <div class="row g-3">
                    <div class="col-12 col-md-6 col-lg-4 colMia">
                        <div className="card cardMia">
                            <div className="card-body">
                                <img src={foto1} alt="" className="card-img-top"/>
                                <div className="card-title">
                                    <b>Ver proyecto</b> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 colMia">
                    <div className="card cardMia">
                            <div className="card-body">
                            <img src={foto1} alt="" className="card-img-top"/>
                                <div className="card-title">
                                    <b>Ver proyecto</b> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 colMia">
                    <div className="card cardMia">
                            <div className="card-body">
                            <img src={foto1} alt="" className="card-img-top"/>
                                <div className="card-title">
                                    <b>Ver proyecto</b> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 colMia">
                    <div className="card cardMia">
                            <div className="card-body">
                            <img src={foto1} alt="" className="card-img-top"/>
                                <div className="card-title">
                                    <b>Ver proyecto</b> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GridHogares
