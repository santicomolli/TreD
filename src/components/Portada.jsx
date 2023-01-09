import portada from "../assets/portada.jpg";
import portadacel from "../assets/ventana.jpg";

let screen = window.innerWidth

const pantallaPc = () => {
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" interval={1000}>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src={portada} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h5><p>Confianos tu <b>SUEÑO</b> , que en <b>TreD</b>, lo hacemos <b>REALIDAD</b>.</p></h5>
                <hr></hr>
            </div>
        </div>
    </div>
</div>
}

const pantallaCel = () => {
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" interval={1000}>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src={portadacel} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h5><p>Confianos tu <b>SUEÑO</b> , que en <b>TreD</b>, lo hacemos <b>REALIDAD</b>.</p></h5>
                <hr></hr>
            </div>
        </div>
    </div>
</div>
}

window.onresize = function(){
    
    screen = window.innerWidth;
    console.log(screen)
}
if(screen > 1000){
    pantallaPc();
}else if(screen > 750 && screen < 1000){
    pantallaCel()
}

export default Portada;
