import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <footer className="page-footer text-center text-md-left pt-3" id="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <h5 className="text-uppercase font-weight-bold mb-3">
                PlanetPax
              </h5>
              <p>
              Know your planets
              </p>
            </div>

            <hr className="w-100 clearFix d-md-none" />

            <hr className="w-100 clearFix d-md-none" />

            <div className="col-md-2 mx-auto">
              <h5 className="text-uppercase font-weight-bold mb-3">Links</h5>
              <Nav defaultActiveKey="" className="flex-column" id="header">
              <Nav.Link as={Link} to="/planets">
                Planets
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            </div>

            <hr className="w-100 clearFix d-md-none" />

            <div className="col-md-2 mx-auto">
              <h5 className="text-uppercase font-weight-bold mb-3">Contact Us</h5>
              <p>Email: planetpax@gmail.com</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="footer-copyright py-2 text-center">
          <div className="container-fluid">
            © 2022 Copyright
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;