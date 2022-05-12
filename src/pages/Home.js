import React from 'react';
import "./Home.css";
import {Link} from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <div className="hero">
            <div className='hero__content'>
                    <div className='hero__text'>
                        <h1>PlanetPax</h1>
                        <p>Know your planets</p>
                        <Link to="/planets"><button>Explore</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
