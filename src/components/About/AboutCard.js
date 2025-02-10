import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alejandro Pérez </span>
            from <span className="purple"> Madrid, Spain.</span>
            <br />
            I am currently finishing my studies in Web Application Development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cybersecurity
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Anything one man can imagine, other men can make real."{" "}
          </p>
          <footer className="blockquote-footer">Jules Verne</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
