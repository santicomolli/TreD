import React from 'react'
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import wp from "../assets/whatsapp_logo.png"
import "../css/Contacto.css"

const ContactoScreen = () => {

    return (

        <>
            <div>
                <Header/>
            </div>
            <div className="container mt-5 mb-5">
                {/* <div className="form">
                    <span className="form_title">Contactanos</span>
                    <form action="">
                        <div className="form_input">
                            <i className="ri-user-line"></i>
                            <input type="text" placeholder="Nombre" />
                            <span className="bar"></span>
                        </div>
                        <div className="form_input">
                            <i className="ri-mail-line"></i>
                            <input type="text" placeholder="Email" />
                            <span className="bar"></span>
                        </div>
                        <div className="form_input mt-2">
                            <i className="ri-mail-line"></i>
                            <textarea placeholder="Consulta..." rows="4" cols="50">
                            At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
                            </textarea>
                            <span className="bar"></span>
                        </div>
                        <button type="submit" className="form_button">Enviar</button>
                    </form>
                </div> */}
            </div>
            <div class="whatsapp">
                <a href="https://wa.me/5493815392733" target="_blank">
                    <img src={wp} alt="whatsapp" />
                </a>
            </div>
            <Footer/>
        </>
    )
}

export default ContactoScreen