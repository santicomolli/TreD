import React from 'react'
import equipo from "../assets/Equipo.jpg"
import equipo2 from "../assets/equipo2.jpg"
import Footer from "../components/Footer"

import "../css/Equipo.css"

const EquipoScreen = () => {
    
    return (
        <>
            <div className="filaCarrousel">
                <div className="col">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item item">
                                <img src={equipo} className="d-block w-100" alt="equipo"/>
                            </div>
                            <div className="carousel-item item active">
                                <img src={equipo2} className="d-block w-100" alt="equipo"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <hr id='hrHome' />

            <div className="container mb-5 container-mio">
                <div className="row">
                    <div className="col-md-12">
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