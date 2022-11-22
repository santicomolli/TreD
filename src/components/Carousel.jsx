import Carousel from 'react-bootstrap/Carousel';
import render1 from '../assets/render1.jpg';
import render2 from '../assets/render2.jpg';
import render3 from '../assets/render3.jpg'

import "../css/Carousel.css"

function carouselPrincipal() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-auto w-100" src= {render1} alt="First slide" />
        <Carousel.Caption>
          <p>Confianos tu <b>SUEÑO</b> , que en <b>TreD</b>, lo hacemos <b>REALIDAD</b>.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src= {render2} alt="Second slide" />
        <Carousel.Caption>
        <p>En estos le podemos poner otro texto.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={render3} alt="Third slide" />
        <Carousel.Caption>
        <p>En estos le podemos poner otro texto.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default carouselPrincipal;