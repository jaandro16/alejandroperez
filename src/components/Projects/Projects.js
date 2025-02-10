import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import carniceria from "../../Assets/Projects/carniceria.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={carniceria}
              isBlog={false}
              title="Carnicería El Viso"
              description="Website of a butcher shop. The development is in progress; for now, it is simply visual, and I am working on making it functional. The WhatsApp chat and email are enabled for contacting the establishment. Not finished."
              ghLink="https://github.com/jaandro16/CarniceriaElViso"
              demoLink="https://carniceriaelviso.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Virtual Academy"
              description="Log In of a virtual academy developed with Java. It is a simulation created to apply the basic knowledge acquired about structured programming in Java packages."
              ghLink="https://github.com/jaandro16/MiPrimerRespositorio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
