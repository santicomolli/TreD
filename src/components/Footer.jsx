import React from 'react'
import logo from "../assets/logoFooter.jpg"
import "../css/Footer.css"

const Footer = () => {

    return (

        <footer className="fixed-bottom">
            <div classname="info-1">
                    <img src={logo} alt="Tred" width={200} height={200} />
            </div>
            <div classname="info-2">
                <h4>
                    mismo que menu hamburguesa
                </h4>
            </div>
            <div classname="info-3">
                <h4>
                    iconos redes sociales
                </h4>
            </div>
        </footer>
    )
}

export default Footer