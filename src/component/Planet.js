import React from 'react';
import { Card } from 'react-bootstrap';

const Planet = ({planet, onClick}) => {
    return (
        <Card onClick={onClick} className="planet mx-auto" style={{ width: '20rem'}}>
    <Card.Img  src={planet.img} style={{ height: '60%'}} />
    <Card.Body>
      <Card.Title>{planet.name}</Card.Title>
      <Card.Text>
        Name: {planet.name} <br />
        Diameter: {planet.diameter} <br />
        Number of Moons: {planet.noOfMoons} <br />
      </Card.Text>
    </Card.Body>
  </Card>
    )
}

export default Planet