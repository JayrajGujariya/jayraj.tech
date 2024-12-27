import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Farminfo from "../../Assets/Projects/FarmInfo.png"
import Unify from "../../Assets/Projects/Unify.png"
import Kys from "../../Assets/Projects/KYS.png"
import WeatherApp from "../../Assets/Projects/WeatherApp.png"
import Portfolio from "../../Assets/Projects/PortfolioWeb.png"
import Amazon from "../../Assets/Projects/AmzonClone.png"



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
              imgPath={Unify}
              title="Unify-Social Media WebApp"
              description="Developed a responsive and user-friendly interface for a social media platform, ensuring a seamless experience across all devices. The platform allows users to create personal profiles, upload posts, and follow other users. I focused on designing intuitive navigation and interactive features to enhance user engagement with the content. Throughout the project, I worked closely with backend developers to ensure a cohesive and consistent user experience across all functionalities, delivering a polished and efficient platform."
              ghLink="https://github.com/JayrajGujariya/Unify-SociamMediaApp"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="This is a modern and responsive portfolio website built using React, featuring a clean dark-themed design with vibrant colors and interactive elements. It includes sections like Home, About, Projects, and Resume, offering an overview of my skills, experience, and work. With smooth navigation and engaging visuals, including animations, the website effectively showcases my capabilities as a software developer and serves as a platform to connect with potential clients or employers."
              demoLink="https://jayraj.tech/ "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Farminfo}
              title="Agricluture Info Portal"
              description="I developed an informative and user-friendly website for eFarmInfo, a platform providing expert agricultural consulting services to farmers. The website offers a variety of features, including expert guidance on crop diseases, disease management, crop growth, and the latest agricultural technologies. Through 'Expert Calling Services,' users can access personalized advice from agricultural specialists to improve crop production, manage diseases, and implement effective farming techniques. The platform aims to bridge the gap between modern scientific advancements and traditional farming practices, helping farmers increase productivity and ensure sustainable growth."
             demoLink="https://farminfo.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kys}
              title="Know Your Spend"
              description="I developed a robust web application using React, NodeJS, MongoDB, and Bootstrap to help users efficiently track and manage their cashless transactions. The platform enables users to monitor their spending by tracking expenses and visualizing trends through interactive graphs. It also features a customer management system, allowing users to add, update, and organize financial tracking. With a focus on usability, I designed an intuitive user interface to enhance the overall experience of financial management, making it easier for users to stay on top of their finances and make informed decisions."
              ghLink="https://github.com/JayrajGujariya/KYS" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Amazon}
              title="Amazon UI Clone"
              description="The Amazon UI Clone is a responsive and visually precise replica of the Amazon.com homepage, built using React, HTML5, CSS3, and JavaScript. It features a fully functional navigation bar with categories like 'Today's Deals' and 'Customer Service,' a dynamic search bar, account options, and a shopping cart for seamless user interaction.This project demonstrates proficiency in front-end development, focusing on responsive design, intuitive user interfaces, and efficient component-based architecture in React."
              ghLink="https://github.com/JayrajGujariya/amazon.com"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeatherApp}
              title="Weather Web-App"
              description="This is a modern, responsive weather application that allows users to search for real-time weather updates for any city. The application features a clean, gradient-based design with intuitive icons and clear data displays for temperature, humidity, and wind speed. Users can easily navigate the app via a search bar, making it both user-friendly and visually appealing."
              ghLink="https://github.com/JayrajGujariya/WeatherApp"         
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
