import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Momin Umer Buksh </span> 
            from <span className="purple"> Islamabad, Pakistan.</span>
            <br /> I am a dedicated and passionate Full Stack Developer with a strong drive for 
            continuous improvement and problem-solving.
            <br /><br/>
            Additionally, I am currently employed as a software developer at
            Webroyx.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Momin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
