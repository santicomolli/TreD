import React from 'react'
import {NavLink} from "react-router-dom"
import logoFooter from "../assets/logo-footer.png"
import "../css/Footer.css"

const Footer = () => {

    return (

        <footer>
            <div className="footer container flex-auto">
                <div class="row">
                    <div class="footer-col col d-flex justify-content-between align-items-center">
                        {/* columna 1 */}
                        <div class="logo me-5">
                            <img class="img-logo-footer" src={logoFooter} alt="logo" />
                        </div>
                         {/* columna 2 */}
                        <div class="col-links-2 me-5">
                            <ul className="listRedes">
                                <li>
                                    <a class="text-black text-decoration-none" href='https://www.whatsapp.com/' target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i>  </a>
                                </li>
                                <li>
                                    <a class="text-black text-decoration-none" href='https://www.gmail.com/' target="_blank"><i class="fa fa-envelope-o" aria-hidden="true"></i>  </a>
                                </li>
                            </ul>
                        </div>
                        {/* columna 3 */}
                        <div class="col-links-2 me-5">
                            <ul className="listRedes">
                                <li>
                                    <a class="text-black text-decoration-none" href='https://www.instagram.com/?hl=es' target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i>  </a>
                                </li>
                                <li>
                                    <a class="text-black text-decoration-none" href='https://www.facebook.com/' target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i>  </a>
                                </li>
                                <li>
                                    <a class="text-black text-decoration-none" href='https://twitter.com/' target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i>  </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row text-center leyenda">
                    <hr />
                    <p> &copy; SC.JFS copyright.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer