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
                    <div class="row m-5 text-center">
                        <div class="col">
                            <div className="polaroid">
                                <img src={residencial} alt="" className="img-card"/>
                                <div className="container-proy">
                                    <p>Comercial</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="polaroid">
                                <img src={comercial} alt="" className="img-card"/>
                                <div className="container-proy">
                                    <p>Comercial</p>
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
