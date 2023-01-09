import {React, useState} from 'react'
import {Link, NavLink} from "react-router-dom"
import logo from "../assets/logo-nav.svg";
import logoGrande from "../assets/logoGrande.png";
import portada from "../assets/portada.jpg";
// import portadacel from "../assets/ventana.jpg";
// import render2 from '../assets/render2.jpg';
// import render3 from '../assets/render3.jpg';
import "../css/Header.css";

const Header = () => {
  let screen = window.innerWidth;

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

return(
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
                              <li><NavLink className="dropdown-item navLink navbar-nav" to="/cafeteria">Cafeteria</NavLink></li>
                              <li><NavLink className="dropdown-item navLink navbar-nav" to="/hogares">Hogares</NavLink></li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link navLink active" to="/equipo">Equipo</NavLink>
                        </li>
                      </ul>
                    </div>
                </div>
              </nav>
          </>
  )
};


  // const pantallaCel = () => {
  //   <div
  //     id="carouselExampleSlidesOnly"
  //     className="carousel slide"
  //     data-bs-ride="carousel"
  //     interval={1000}
  //   >
  //     <div className="carousel-inner">
  //       <div className="carousel-item active">
  //         <img src={portadacel} className="d-block w-100" alt="..." />
  //         <div className="carousel-caption d-none d-md-block">
  //           <h5>
  //             <p>
  //               Confianos tu <b>SUEÑO</b> , que en <b>TreD</b>, lo hacemos{" "}
  //               <b>REALIDAD</b>.
  //             </p>
  //           </h5>
  //           <hr></hr>
  //         </div>
  //       </div>
  //     </div>
  //   </div>;
  // };
  // );

export default Header;
