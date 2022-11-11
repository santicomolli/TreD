import React from 'react'
import logo from "../assets/logoFooter.jpg"
import "../css/Footer.css"
import logoFooter from "../assets/logo-footer.png"

const Footer = () => {

    return (

        <footer classname="bottom">
            <div classname="info-1">
                <img src= {logoFooter}>
                </img>
            </div>
            <div classname="info-2">
                <h4>
                    mismo que menu hamburguesa
                </h4>
            </div>
            <div classname="info-3">
            <div class="social-container">
                    <ul class="soc-list" tabindex="0" aria-label="">
                    <li class="soc-facebook">
                        <a href="https://www.facebook.com/" target="_blank" aria-label="facebook link">facebook</a>
                    </li>
                    <li class="soc-instagram">
                        <a href="https://www.instagram.com" target="_blank" aria-label="instagram link">instagram</a>
                    </li>
                    <li class="soc-linkedin">
                        <a href="https://www.linkedin.com" target="_blank" aria-label="linkedin link">linkedin</a>
                    </li>
                    <li class="soc-twitter">
                        <a href="https://twitter.com" target="_blank" aria-label="twitter link">twitter</a>
                    </li>
                    <li class="soc-youtube">
                        <a href="https://www.youtube.com" target="_blank" aria-label="youtube link">youtube</a>
                    </li>
                </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer