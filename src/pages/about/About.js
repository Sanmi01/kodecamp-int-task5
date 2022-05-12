import React from 'react';
import { Container } from 'react-bootstrap';
import solarImage2 from "../../assets/images/solarSystem2.JPG";

const About = () => {
    return (
        <Container className="py-3 px-5" id="about-page">
            <div className="row p-3 align-items-center">
                <div className="col-md-6 p-3">
                    <h4>Our Story</h4>
                    <h2>Few words about us</h2>
                    <hr />
                    <p>PlanetPax aims at bringing basic information about the planetary bodies in our solar system right to your fingertips</p>
                </div>
                <div className="col-md-6 p-3">
                    <img className="img-fluid" src={solarImage2} alt="img" />
                </div>
            </div>
        </Container>
    )
}

export default About