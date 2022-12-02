import React from 'react'
import Footer from "../components/Footer"
import Carousel from "../components/Carousel"
import residencial from "../assets/residencial.jpg"
import comercial from "../assets/comercial.jpg"
import "../css/HomeScreen.css"

const HomeScreen = () => {

    return (
        <>
            <div>
                <Carousel/>
            </div>

            <div>
                <div class="container">
                    <div class="row prueba m-5 text-center">
                        <div className="col-md-6 col-sm-12">
                            <div className="polaroidR">
                                <img src={residencial} alt="" className="img-card"/>
                                <div className="container-proy">
                                    <h4>Residencial</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="polaroidC">
                                <img src={comercial} alt="comercial" className="img-card"/>
                                <div className="container-proy">
                                    <h4>Comercial</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default HomeScreen
