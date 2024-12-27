import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jayraj Gujariya </span>
            from <span className="purple">Bhavanagar, Gujarat, India.</span>
            <br />
            I am recent graduate from  Gujarat Technological University(GTU).
            <br />
            I love problem-solving and developing new things.<br></br>
            I am <span className="purple">Junior Software Developer </span>at eSparkBiz  Technologies Ahemadabad.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Travelling
            </li>
            <li className="about-activity">
              <ImPointRight />Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight />Playing Garaba
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Together we achieve more; let's grow together."{" "}
          </p>
          <footer className="blockquote-footer">Jayraj Gujariya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
