import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import logo from '../assets/img/icons/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

function Footer() {
  return (
    <footer className='footer'>
        <Container>
            <Row className='aligh-item-center'>
                <Col sm={6}>
                    <img alt='logo' src={logo}/>
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    {/* <div className='social-icon'>
                        <a href=''><img src={navIcon1}/></a>
                        <a href=''><img src={navIcon2}/></a>
                        <a href=''><img src={navIcon3}/></a>
                    </div> */}
                    <p>Copy Right 2024. All Right Reserved. Sei.</p>
                </Col>

            </Row>
        </Container>
      
    </footer>
  )
}

export default Footer
