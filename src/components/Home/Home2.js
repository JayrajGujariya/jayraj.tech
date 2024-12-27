import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Girl_Coding from "../../Assets/Girl_Coding.webp"
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
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
            As a recent Computer Engineering graduate with a strong background in programming and software development, I am driven by a passion for transforming ideas into meaningful solutions.🧩
              <br />
              <br />I am proficient in core programming languages like
                <b className="purple"> C++ and Javascript, </b>
              along with expertise in frameworks like <b className="purple">React.js</b> and tools such as <b className="purple">Node.js, SQL, and MongoDB.</b> These skills allow me to create scalable, user-friendly web applications with seamless functionality.
              <br />
              <br />
              My academic and professional experiences have equipped me with a strong grasp of computer science fundamentals, including algorithms, databases, and software engineering principles. I thrive in building innovative web technologies and exploring new cutting-edge technologies.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={Girl_Coding} className="img-fluid w-100px" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/JayrajGujariya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/jayraj_gujariya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineInstagram/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jayraj-gujariya/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
