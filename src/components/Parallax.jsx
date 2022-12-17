import React from 'react'
import {Parallax} from "react-parallax"
import {NavLink} from "react-router-dom"
import foto1 from "../assets/render1.jpg"
import foto2 from "../assets/render2.jpg"
import foto3 from "../assets/render3.jpg"
import "../css/Parallax.css"

const Parallax1 = () => {

    return (

        <div>
            <Parallax strengh={300} bgImage={foto1}>
                <div className="content">
                    <div className="text-content"><NavLink className="nav-link navLink active" to="/cafeteria">Cafeteria</NavLink></div>
                </div>
            </Parallax>
            <Parallax strengh={300} blur={{min:-15, max:10}} bgImage={foto2}>
                <div className="content">
                    <div className="text-content"><NavLink className="nav-link navLink active" to="/gastronomia">Gastronomia</NavLink></div>
                </div>
            </Parallax>
            <Parallax className="mb-5" strengh={-600} bgImage={foto3}>
                <div className="content">
                    <div className="text-content"><NavLink className="nav-link navLink active" to="/hogares">Hogares</NavLink></div>
                </div>
            </Parallax>
        </div>
    )
}

export default Parallax1