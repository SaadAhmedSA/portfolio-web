import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gym from "../../Assets/Projects/gym.PNG";
import driver from "../../Assets/Projects/Driver.PNG";
import meme from "../../Assets/Projects/meme.PNG";
import blog from "../../Assets/Projects/blogging.PNG";
import Ecom from "../../Assets/Projects/e-commerce.PNG";
import weather from "../../Assets/Projects/weather.PNG";
import todo from "../../Assets/Projects/todo.PNG";
import char from "../../Assets/Projects/charity.PNG";
import Estste from "../../Assets/Projects/Estate.PNG"
import zyck from "../../Assets/Projects/Zyck.PNG"
import buy from "../../Assets/Projects/buysell.PNG"
import olx from "../../Assets/Projects/olx.PNG"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zyck}
              isBlog={false}
              title="Zyck Properties"
              description="Introducing the zyck properties. Real Estate app is created using Next.js technology.Where user Sell and Buy and Rent Properties"
              // ghLink="https://github.com/SaadAhedSA/Shape-up-Gym"
              demoLink="https://www.zyckproperty.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={olx}
              isBlog={false}
              title="Olx Clone"
              description="Introducing the olx clone. where user sign in youself and post ad of their items for sell."
              ghLink="https://github.com/SaadAhmedSA/olx-clone"
              demoLink="https://olx-clone-sfvs.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="Shape-Up Gym"
              description="Introducing the Gym web. This app is created using Next.js technology. lorem ipsum"
              ghLink="https://github.com/SaadAhedSA/Shape-up-Gym"
              demoLink="https://shape-up-gym-gz1w.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={driver}
              isBlog={false}
              title="Rider Register App"
              description="Introducing the driver Registration App like Indrive.Where You login yourself and register yourself as a rider. This app is created using Reactjs and firebase. "
              ghLink="https://github.com/SaadAhmedSA/Rider-registeration-web"
              demoLink="https://rider-registeration-web.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Estste}
              isBlog={false}
              title="Real Estate App"
              description="Introducing the Real-Estate App using React and Tailwind css.Wher user see their Dream homes and Property. "
              ghLink="https://github.com/SaadAhmedSA/Real-Estate"
              demoLink="real-estate-lovat-delta.vercel.app"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meme}
              isBlog={false}
              title="Meme Maker App"
              description="Introducing the Meme maker.Where You create your favourite meme. This app is created using Nextjs and memeApi. "
              ghLink="https://github.com/SaadAhmedSA/Meme-Maker"
              demoLink="https://meme-make.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blogging App"
              description="A modern blogging platform built with React and Firebase. Users can create and publish posts, with support for image uploads, user profiles, and commenting
"
              ghLink="https://github.com/SaadAhmedSA/Blogging-App-React"
              demoLink="https://react-pro-2.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecom}
              isBlog={false}
              title="E-commerce App"
              description=" Introducing the E-commerce.Where I use add to cart functionality with redux to handle global state.
"
              ghLink="https://github.com/SaadAhmedSA/E-commerce-with-add-to-cart-redux"
              demoLink="https://e-commerce-with-add-to-cart-redux.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buy}
              isBlog={false}
              title="Buy-Sell corner"
              description=" Introducing the Buy-Sell corner.Where a user create a account and list their product to sell.
"
              ghLink="https://github.com/SaadAhmedSA/E-commerce-with-add-to-cart-redux"
              demoLink="https://e-commerce-with-add-to-cart-redux.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather-App"
              description=" Weather app created using weather api and reactjs.
"
              ghLink="https://github.com/SaadAhmedSA/Weather-App-React"
              demoLink="https://reactproject-weatherapp.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Realtime Todo-App"
              description=" Todo app created using firebase realtime method and material ui. "
              ghLink="https://github.com/SaadAhmedSA/Todo-app-firebase-realtime"
              demoLink="https://todoapp-firebaserealtime.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={char}
              isBlog={false}
              title="The Charity"
              description=" Charity web create using,html css and bootsrap"
              ghLink="https://github.com/SaadAhmedSA/The-Charity"
              demoLink="https://saadahmedsa.github.io/The-Charity/"
            />
          </Col>
          

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
