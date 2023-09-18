import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import coding from "../../Assets/coding.jpg";

function About() {
  return (
    <Container fluid className="about-section">
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
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              RELEVANT <span className = "purple"> EXPERIENCE </span>
            </h1>
            <p className = "home-about-body">
                <p>
                <b> Abris:</b> At Abris, an innovative startup specializing in AI technologies and Web3, I've garnered hands-on experience with web technologies, including React and Angular. These technologies have been instrumental in developing functional websites that interact with ChatGPT via LangChain prompt engineering. My contributions include building products such as AIChefs. During my tenure, I embraced a fast-paced, collaborative learning environment throughout two-week sprint cycles.
                </p>
                <p>
                <b>Boston University Research:</b> Serving as a paid research intern under Professor Joshua Campbell at Boston University, I've been actively involved in a lab dedicated to computational applications within bioinformatics and biology. I've contributed to the development of the singlecellTK R package, gaining a robust understanding of the package development lifecycle and the effective use of Git.
                </p>

                <p>
                <b>Cornell Mars Rover - Software Team Member </b>: I am a software team member on Cornell Mars Rover, a competitive team under Cornell Engineering that participates in the annual University Rover Competition (URC). The team is tasked with building a rover capable of various tasks, such as Autonomous Navigation. Our team comprises subteams from all engineering disciplines. As a software subteam member, I've honed my skills in C++ and Python while enjoying the camaraderie of a competitive and collaborative environment.
                </p>
              </p>
          </Col>
        </Row>
      </Container>
    </Container>
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
