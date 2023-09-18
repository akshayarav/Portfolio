import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            <p>
                    I'm an avid learner who loves challenge. Computer Science is an extension of these interests, with technology guiding my passions. 
                    I've dabbled with coding several times in highschool, but started to really learn its capabilities in late 2022, when I took an online Python course offerred by the 
                    University of Helsinki. Through this experience my fascination with software bloomed and continues to expand as I am constantly faced with challenges that require the tenacity to learn.
                    
                    <br></br>
                    <br></br>
                    Currently, I'm a student at the College of Engineering at Cornell University, planning to graduate in 2025. Subsequent to my fascination
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
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/akshayarav"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/akshayaravind26/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
              <a href="mailto::akshayaravindpr@gmail.com" 
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"> 
                <AiFillMail />
              </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
