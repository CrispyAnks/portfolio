import { Container,Row,Col } from 'react-bootstrap';
import React, { useEffect, useState}  from 'react';
import { motion, useAnimation } from 'framer-motion';
import springboot from '../assets/img/icons/spring-boot.png';
import mybatis from '../assets/img/icons/mybatis-logo.png';
import azure from '../assets/img/icons/azure.png';
import bootstrap from '../assets/img/icons/bootstrap.png';
import github from '../assets/img/icons/github.png';
import java from '../assets/img/icons/java.png';
import javascript from '../assets/img/icons/javascript.png';
import mysql from '../assets/img/icons/mysql.png';
import react from '../assets/img/icons/react.png';



function Skills() {
  const [lan, setLan] = useState('eng');
  useEffect(() => {
    if(localStorage.getItem('lan') === 'jpn'){
        setLan('jpn');
    }else{
        setLan('eng');
    }
}, [])
  return (
    
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col style={{minWidth:'800px'}}>
                    <div className='skill-bx'>
                      <h2>{lan === 'jpn' ? 'スキル': 'Skills'}</h2>
                      <Row>
                        <Col className='skillxy' id='xy1' style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                          <h1>{lan === 'jpn' ? 'フレームワーク': 'Framework'}</h1>
                          <motion.div
                                initial={{ x: '500%', y: '250%' }}
                                whileInView={{x:50, y:50}}                                
                                transition={{ duration: 0.7, delay: 0.2 }}
                                style={{ width: 50, height: 50, margin: "0" }}
                          ><img src={springboot}/></motion.div>
                          <motion.div
                                initial={{ x: '630%', y: '260%' }}
                                whileInView={{x:200, y:100}}                                
                                transition={{ duration: 0.7, delay: 0.2 }}
                                style={{ width: 50, height: 50, margin: "0" }}
                          ><img src={mybatis}/></motion.div>
                        </Col>
                        <Col className='skillxy' id='xy2'>
                          <h1>{lan === 'jpn' ? 'バックエンド': 'Back-End'}</h1>
                          <motion.div
                                initial={{ x: '-70%', y: '150%' }}
                                whileInView={{x:100, y:0}}                                
                                transition={{ duration: 0.7, delay: 0.2 }}
                                style={{ width: 50, height: 50, margin: "0" }}
                                ><img src={java}/></motion.div>
                          <motion.div
                                initial={{ x: '-70%', y: '150%' }}
                                whileInView={{x:150, y:-0}}                                
                                transition={{ duration: 0.7, delay: 0.2 }}
                                style={{ width: 50, height: 50, margin: "0" }}
                                ><img src={mysql}/></motion.div>
                        </Col>
                      </Row>
                      <Row>
                      <Col className='skillxy' id='xy3' style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                          <h1>{lan === 'jpn' ? 'ツール': 'Tools'}</h1>
                          <motion.div
                                initial={{ x: '280%', y: '-100%' }}
                                whileInView={{x:-100, y:100}}                                
                                transition={{ duration: 0.7, delay: 0.2 }}
                                style={{ width: 50, height: 50, margin: "0" }}
                                ><img src={github}/></motion.div>
                           <motion.div
                                initial={{ x: '400%', y: '-100%' }}
                                whileInView={{x:-100, y:0}}                                
                                transition={{ duration: 0.7, delay: 0.2 }}
                                style={{ width: 50, height: 50, margin: "0" }}
                                ><img src={azure}/></motion.div>
                        </Col> 
                        <Col className='skillxy' id='xy4'>
                          <h1>{lan === 'jpn' ? 'フロントエンド': 'Front-End'}</h1>
                          <motion.div
                                initial={{ x: '-70%', y: '-250%' }}
                                whileInView={{x:100, y:100}}                                
                                transition={{ duration: 0.7, delay: 0.2 }}
                                style={{ width: 50, height: 50, margin: "0" }}
                                ><img src={react}/></motion.div>
                          <motion.div
                                initial={{ x: '-70%', y: '-300%' }}
                                whileInView={{x:200, y:-50}}                                
                                transition={{ duration: 0.7, delay: 0.2 }}
                                style={{ width: 50, height: 50, margin: "0 10px" }}
                                ><img src={javascript}/></motion.div>
                          <motion.div
                                initial={{ x: '-70%', y: '-400%' }}
                                whileInView={{x:20, y:-100}}                                
                                transition={{ duration: 0.7, delay: 0.2 }}
                                style={{ width: 50, height: 50, margin: "0 10px" }}
                                ><img src={bootstrap}/></motion.div>
                        </Col>
                      </Row>
                    </div>
                </Col>
            </Row>
        </Container>
       
    </section>
  ) 
}

export default Skills
