import React from 'react';
import { Container } from 'react-bootstrap';
import earth from "../../assets/images/earth.jpg";

const Contact = () => {
    return (
        <Container className="py-3 px-5" id="contact-page">
            <div className="row p-3 align-items-center">
                <div className="col-md-6 p-3">
                    <h4>Contact Us</h4>
                    <hr />
                    <p>Want to get in touch with us?</p>
                    <p>You can contact us by sending a mail to planetpax@gmail.com</p>
                </div>
                <div className="col-md-6 p-3">
                    <img className="img-fluid" src={earth} alt="img" />
                </div>
            </div>
        </Container>
    )
}

export default Contact