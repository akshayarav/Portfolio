import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <section className=" full-page d-flex align-items-center">
      <Container fluid className="about-container">
        <Container fluid className="home-about-section">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="purple"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                  <p>
                    I'm an avid learner who loves a challenge.

                    <br></br>
                    <br></br>
                    Currently, I'm a student at the College of Engineering at Cornell University, graduating in 2026. Subsequent to my fascination
                    with technology, I've found myself majoring in Computer Science. My experience in both work and personal projects has made me proficient with full stack software engineering,
                    using skills in web development and server side technologies to create interactive apps. Beyond Full Stack, I have a passion for AI technologies and Machine Learning,
                    and I hope to explore these avenues in my future career.
                    <br></br>
                  </p>
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={myImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </section>
  );
}

export default About;