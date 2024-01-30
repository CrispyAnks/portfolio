import { React, useState} from 'react'
import { Container,Row,Col,Nav, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';

import TrackVisibility from 'react-on-screen';
import 'animate.css';


function Projects() {
    const [projects, setProjects] = useState([
        {
            title:"Gamerk",
            description:"Web Application Site",
            imgUrl: projImg1,
            url:'https://gamerk-site-c85030d2267e.herokuapp.com/',
            type:1
        },
        {
            title:"Bernini Introduction",
            description:"Web Design Site",
            imgUrl: projImg2,
            url:'https://crispyanks.github.io/bernini-design/',
            type:2
        },
       
    ]);
   
  return (
    <section className='project' id='projects'>
        <Container>
            <Row>
                <Col>
                
                    <h2>Projects</h2>
                    <br/>
                   
                <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav variant='pills' className='nav-pills mb-5 justify-conten-center align-items-center' id='pills-tab'>
                        <Nav.Item>
                            <Nav.Link eventKey='first'>Total</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='second'>Full-Stack</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='third'>Front-End</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey='first'>   
                            <Row>
                            {projects.map((project, index) => {
                                
                                return (
                                    <ProjectCard key={index} project={project} index={index} />
                                );
                            })}
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey='second'>
                        <Row>
                                {projects.map((project, index) => {
                                        if (project.type === 1) {
                                            
                                            return  <ProjectCard key={index} project={project} index={index} />;
                                        } else {
                                            return null;
                                        }
                                    })}
                        </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey='third'>
                        <Row>
                                {projects.map((project, index) => {
                                        if (project.type === 2) {
                                            return  <ProjectCard key={index} project={project} index={index} />;
                                        } else {
                                            return null;
                                        }
                                    })}
                        </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2}/>
    </section>
      
  )
}

export default Projects
