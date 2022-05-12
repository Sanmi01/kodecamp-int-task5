import React, { useState } from 'react'
import { Offcanvas, Container } from "react-bootstrap";
import Planet from '../../component/Planet';
import "./Planets.css"

const Planets = ({planetItems}) => {
    const [show, setShow] = useState(false);
    const [planetInfo, setPlanetInfo] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (planet) => {
        setPlanetInfo(planet)
        setShow(true)
    };

    return (
        <Container>
        <div className="box position-relative mx-auto">
            {planetItems.map((planet) => (
            <Planet className="p-3 mx-auto" onClick={() => handleShow(planet)}  planet={planet} key={planet.id} />
        ))}
        </div>
        <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{planetInfo.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="planet-img-div m-2 p-2">
        <img src={planetInfo.img} alt="" />
        </div>
          <p className="info">{planetInfo.info}</p>
          <div>
            Name: {planetInfo.name} <br />
            Diameter: {planetInfo.diameter} <br />
            Number of Moons: {planetInfo.noOfMoons} <br />
            Orbit: {planetInfo.orbit}
          </div>
          <div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
        </Container>
    )
}

export default Planets
