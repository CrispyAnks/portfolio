import {React, useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/icons/logo.png';
import navIcon1 from '../assets/img/icons8-gmail-48.png';
import navIcon2 from '../assets/img/icons8-github-48.png';
import navIcon3 from '../assets/img/nav-icon3.svg';



function NavBar() {
    const[activeLink, setActiveLink] = useState('home');
    const[scroll, setScroll] = useState(false);
    const onUpdateActiveLink = (name) => {
        setActiveLink(name);
    }

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScroll(true);
            }else{
                setScroll(false);
            }
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])
  return (
    <div>
    <Navbar expand="lg" className={scroll ? "scrolled" : ""}>
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('about')}>About me</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <Navbar.Brand href="#home">
            <img src={logo} alt='Logo'/>
            {/* <Nav.Link href="#home" className='navbar-link' style={{color:'white'}}>Sei</Nav.Link> */}
          </Navbar.Brand>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='#' onClick={() => navigator.clipboard.writeText('ankscrisp0505@gmail.com')}><img src={navIcon1} alt=''/></a>
                <a href='https://github.com/CrispyAnks'><img src={navIcon2} alt=''/></a>
                {/* <a href='#'><img src={navIcon3} alt=''/></a> */}
            </div>
            {/* <button className="vvd" onClick={() => console.log('connect')}>
                <span>Let's connect</span>
            </button> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar
