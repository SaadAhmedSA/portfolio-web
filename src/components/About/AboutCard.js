import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saad Ahmed </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />I am a Junior Front-end developer using the technology of <span className="purple">ReactJS</span> &<span className="purple"> NextJS </span> , had a opportunity of intern at Zyck technology as front end Developer where I really Enjoy my experience there and contributing to their projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
           
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
