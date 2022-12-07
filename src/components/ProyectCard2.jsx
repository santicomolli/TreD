import React from 'react'
import render1 from "../assets/render1.jpg"
import render2 from "../assets/render2.jpg"
import render3 from "../assets/render3.jpg"
import "../css/ProyectCard2.css"

const ProyectCard2 = () => {

    return (

        <div class="card cardMia">
            <div class="row g-0">
                <div class="col-md-8">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={render1} class="d-block w-100 img-fluid imgMia" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={render2} class="d-block w-100 img-fluid imgMia" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={render3} class="d-block w-100 img-fluid imgMia" alt="..."/>
                            </div>
                        </div>
                    </div>
                    {/* <img src={render1} class="img-fluid rounded-start" alt="..."/> */}
                </div>
                <div class="col-md-3">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProyectCard2
