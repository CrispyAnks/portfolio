import {React, useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/mainview.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Java Engnieer', 'Web Developer', 'Full-Stack Engineer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }
        
        if(!isDeleting && updatedText === fullText){    
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300);
        }
    }

  return (
    <>
      <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7} >
                    <TrackVisibility>
                    {({isVisible}) => 
                        <div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
                            <span className='tagline'>Welcome to my Portfolio</span>
                            <h1 style={{minHeight:'195px'}}>{"Hi I'm Sei. "}<br/><span className='wrap'>{text}</span></h1>
                            <p></p>
                            <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}> Let's Go <ArrowRightCircle/> </button>
                        </div>
                    }
                    
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    
                    <img src={headerImg} alt='Header'/>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Banner
