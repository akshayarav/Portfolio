import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import nature from "../../Assets/nature.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Home() {
  return (
    <section className="full-page d-flex align-items-center">
      <Container fluid id="home">
        <Particle style = {{zIndex: -10}} />
        <Container className="home-content">
          <Row >
            <Col md={5} offset-md-1 className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey, I'm {" "}
              </h1>
  
              <h1 className="heading-name">
                <strong className="main-name"> Akshay Aravind</strong>
              </h1>
  
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              <div>
              <ul style={{ zIndex: 1000 }}>
              <li className="social-icons">
                <a
                  href="https://github.com/akshayarav"
                  target="_blank"
                  rel="noreferrer"
                  className="icon"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/akshayaravind26/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
              <a href="mailto::akshayaravindpr@gmail.com" 
                  target="_blank"
                  rel="noreferrer"
                  className="icon"
                  > 
                <AiFillMail />
              </a>
              </li>
            </ul>
              </div>
            </Col>
            <Col md={6} style={{ paddingBottom: 20 }}>
            <Tilt>
              <img src={nature} className="img-fluid" alt="avatar" style = {{paddingTop: 60, paddingLeft: 70}}/>
            </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>

    </section>
  );
  
}

export default Home;
