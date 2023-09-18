import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fitnessAI from "../../Assets/Projects/fitnessAILogo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitnessAI}
              isBlog={false}
              title="FitnessAI"
              description="A Full Stack project using OpenAI's API and ChatGPT 3.5 to generate custom workout plans!"
              ghLink="https://github.com/akshayarav/FitnessAI"
              demoLink="https://fitness-ai.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
