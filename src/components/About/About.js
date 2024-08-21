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
                <h2 style={{ fontSize: "1.6em" }}> <span className = "purple"> <u> Microsoft</u> </span></h2> 
                <b>Software Engineer Intern</b>
                <p>During my time at Microsoft, I worked on the Azure Stack team. My project was to develop an end to end solution for disconnected cloud services. During my internship, I went through a full design cycle, from hosting design reviews to communicating with other teams in the ideation of my project. I worked with various technologies such as .NET, C#, Powershell, Python, and Virtual Machines, and thoroughly enjoyed my time as a software engineer.</p>
                <br>
                </br>

                <h2 style={{ fontSize: "1.6em" }}> <span className = "purple"> <u> Cornell Mars Rover</u> </span></h2> 

                <b>Software Subteam Lead</b>
                <br>
                </br>
                <p>
                 I have been a member on Cornell Mars Rover for 2+ years and am now the software subteam lead. Cornell Mars Rover is a competitive team under Cornell Engineering that participates in the annual University Rover Competition (URC). The team is tasked with building a rover capable of various tasks, such as Autonomous Navigation. Our team comprises subteams from all engineering disciplines. Technically, I've honed my skills in C++ and Python while enjoying the camaraderie of a competitive and collaborative environment.
                </p>
                <br>
                </br>


                <h2 style={{ fontSize: "1.6em" }}> <span className = "purple"> <u> ABRIS</u> </span></h2> 
                <b>Software Engineer Intern</b>
                <p>
                At Abris, an innovative startup specializing in AI technologies and Web3, I've garnered hands-on experience with web technologies, including React and Angular. These technologies have been instrumental in developing functional websites that interact with ChatGPT via LangChain prompt engineering. My contributions include building products such as AIChefs. During my tenure, I embraced a fast-paced, collaborative learning environment throughout two-week sprint cycles.
                </p>


                <br>
                </br>
                <h2 style={{ fontSize: "1.6em" }}> <span className = "purple"> <u> Boston University Research</u> </span></h2> 
                <p>
                <b>Boston University Research:</b> Serving as a paid research intern under Professor Joshua Campbell at Boston University, I've been actively involved in a lab dedicated to computational applications within bioinformatics and biology. I've contributed to the development of the singlecellTK R package, gaining a robust understanding of the package development lifecycle and the effective use of Git.
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
