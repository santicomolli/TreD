import React from 'react'

import Footer from "../components/Footer"
import Header from "../components/Header"
import HomeCard from "../components/HomeCard"
// import residencial from "../assets/residencial.jpg"
// import comercial from "../assets/comercial.jpg"
import "../css/HomeScreen.css"

const HomeScreen = () => {

    return (
        <>
            <div>
                <Header/>
            </div>
                <div>
                <HomeCard/>
                </div>

            {/* <div>
                <div class="container">
                    <div class="row prueba m-5 text-center">
                        <div className="col-md-6 col-sm-12">
                            <div className="polaroidR animate__fadeInUp">
                                <img src={residencial} alt="" className="img-card"/>
                                <div className="container-proy">
                                    <h4>Residencial</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="polaroidC animate__fadeInUp">
                                <img src={comercial} alt="comercial" className="img-card"/>
                                <div className="container-proy">
                                    <h4>Comercial</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            {/* </div> */}
            <Footer/>
        </>
    )
}

export default HomeScreen
