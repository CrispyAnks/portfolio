import { isVisible } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TrackVisibility from 'react-on-screen';
import aboutimg from '../assets/img/about-img.jpeg'

function About() {

  return (
    <section className='about' id='about'>
      <Container>
        <Row>
          <Col sm={6} md={5}>
            <img src={aboutimg}/>
          </Col>
          <Col sm={6} md={7}>
            <Row>
              <Col sm={6} md={8}>
                <h1>About</h1>
                <p>Hi<br /><br /><br /></p>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="aboutab">
                  <Tab eventKey="home" title="Experience">
                    <br />
                    <p className='aboutp'>Tab content for Experience</p>
                  </Tab>
                  <Tab eventKey="profile" title="Certifications">
                    <br />
                    <p className='aboutp'>Tab content for Certifications</p>
                  </Tab>
                </Tabs>
              </Col>
              <Col sm={6} md={4}>
                <h1>Me</h1>
                <TrackVisibility>
                {({ isVisible }) => 
                    <div className={isVisible ? "animate__animated animate__flipInX" : ""}>
                    
                    <div className='mep' >
                      <h1>1+</h1>
                      <p>Years of Experience</p>
                    </div>
                 
                    </div>
                    }  
                </TrackVisibility>
                <TrackVisibility>
                {({ isVisible }) => 
                    <div className={isVisible ? "animate__animated animate__flipInX" : ""}>
                    
                    <div className='mep'>
                      <h1>6+</h1>
                      <p>Certifications</p>
                    </div>
                 
                    </div>
                    }  
                </TrackVisibility>
                <TrackVisibility>
                {({ isVisible }) => 
                    <div className={isVisible ? "animate__animated animate__flipInX" : ""}>
                    
                    <div className='mep'>
                      <h1>6+</h1>
                      <p>Projects Completed</p>
                    </div>
                 
                    </div>
                    }  
                </TrackVisibility>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
