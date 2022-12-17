import {Link, NavLink} from "react-router-dom"
import Card from "react-bootstrap/Card";
import Stack from 'react-bootstrap/Stack';
import residencial from "../assets/render3.jpg";
import comercial from "../assets/comercial.jpg";
import render2 from '../assets/render2.jpg';

function proyectos() {

  return (
    
      <Stack gap={3}>
        <div className="border nav-item active">
        <NavLink class="nav-link active navLink" aria-current="page" to="/*">
            <Card className="text-center text-white">
              <Card.Img src={residencial} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Casas</Card.Title>
                <Card.Text>tranformamos tu idea en tu hogar</Card.Text>
              </Card.ImgOverlay>
            </Card>
        </NavLink>
            </div>
        <div className="border nav-item active">
        <NavLink class="nav-link active navLink" aria-current="page" to="/*">        
            <Card className=" text-center text-white">
              <Card.Img src={comercial} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Cafeteria</Card.Title>
                <Card.Text>encargate del cafe que nosotros hacemos el proyecto</Card.Text>
              </Card.ImgOverlay>
            </Card>
            </NavLink>
            </div>
        <div className="border nav-item active">
        <NavLink class="nav-link active navLink" aria-current="page" to="/*">
        <Card className="text-center text-white">
              <Card.Img src={render2} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Gastronomia</Card.Title>
                <Card.Text>tranformamos tu idea en tu hogar</Card.Text>
              </Card.ImgOverlay>
            </Card>
            </NavLink>
        </div>
      </Stack>
  );
}

export default proyectos;
