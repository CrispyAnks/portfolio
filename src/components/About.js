import { isVisible } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TrackVisibility from 'react-on-screen';
import aboutimg from '../assets/img/about-img.jpeg'

function About() {
  const [lan, setLan] = useState('eng');
  const aboutJP = ['こんにちは、私の名前はおう せいと申します。香港の大学院で国際金融学科を修了した後に、専門学校HALの情報処理系に入学して、昨年の4月に初めて日本に来ました。今はドン・キホーテのバイトをしています。勉強のスビートと集中力は自信があります。よろしくお願いします。',
                    "Java 1 年",
                    "HTML+CSS 1 年",
                    "JavaScript 3 ヶ月",
                    "SpringBoot 3 ヶ月",
                    "React 3 ヶ月",
                    "SQL 8 ヶ月",
                    "ORACLE JAVA シルバー",
                    "基本情報技術者",
                    "経験年数",
                    "資格",
                    "プロジェクト",
                    ];
  const aboutEN = ["Hello, I'm Ou Sei. I came to Japan from China in 2023. I used to study finance and now I'm learning IT. My goal is to become a full-stack engineer. My technology stack includes Java, SpringBoot, React, and MySQL. You can see my works below!",
                    "Java 1 year",
                    "HTML+CSS 1 year",
                    "JavaScript 3 month",
                    "SpringBoot 3 month",
                    "React 3 month",
                    "SQL 8 month",
                    "JAVA Silver",
                    "Fundamental Information Technology Engineer",
                    "Years of Experience",
                    "Certifications",
                    "Projects Completed",
                    ];
  useEffect(() => {
    if(localStorage.getItem('lan') === 'jpn'){
        setLan('jpn');
    }else{
        setLan('eng');
    }
}, [])

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
                <p>{lan === 'jpn' ? aboutJP[0]: aboutEN[0]}<br /><br /><br /></p>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="aboutab">
                  <Tab eventKey="home" title="Experience">
                    <br />
                    <p className='aboutp'>{lan === 'jpn' ? aboutJP[1]: aboutEN[1]}<br /><br />{lan === 'jpn' ? aboutJP[2]: aboutEN[2]}<br /><br />{lan === 'jpn' ? aboutJP[3]: aboutEN[3]}<br /><br />{lan === 'jpn' ? aboutJP[4]: aboutEN[4]}<br /><br />{lan === 'jpn' ? aboutJP[5]: aboutEN[5]}<br /><br />{lan === 'jpn' ? aboutJP[6]: aboutEN[6]}</p>
                  </Tab>
                  <Tab eventKey="profile" title="Certifications">
                    <br />
                    <p className='aboutp'>{lan === 'jpn' ? aboutJP[7]: aboutEN[7]} <br /><br />{lan === 'jpn' ? aboutJP[8]: aboutEN[8]}<br /><br />TOEIC 880<br /><br />JLPT N1</p>
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
                      <p>{lan === 'jpn' ? aboutJP[9]: aboutEN[9]}</p>
                    </div>
                 
                    </div>
                    }  
                </TrackVisibility>
                <TrackVisibility>
                {({ isVisible }) => 
                    <div className={isVisible ? "animate__animated animate__flipInX" : ""}>
                    
                    <div className='mep'>
                      <h1>6+</h1>
                      <p>{lan === 'jpn' ? aboutJP[10]: aboutEN[10]}</p>
                    </div>
                 
                    </div>
                    }  
                </TrackVisibility>
                <TrackVisibility>
                {({ isVisible }) => 
                    <div className={isVisible ? "animate__animated animate__flipInX" : ""}>
                    
                    <div className='mep'>
                      <h1>6+</h1>
                      <p>{lan === 'jpn' ? aboutJP[11]: aboutEN[11]}</p>
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
