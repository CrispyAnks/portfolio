import {React, useEffect} from 'react';
import { Col } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';


function ProjectCard(project) {
  
  return (
    <>
      <Col>
      <motion.div
                                initial={{ x: 0, y: 50 }}
                                whileInView={{x:0, y:0}}                                
                                transition={{ duration: 0.7, delay: project.index * 0.1 }}
                                >
      <div className='proj-imgbx'>
          <img src={project.project.imgUrl}/>
          <div className='proj-txtx'>
              <h4>{project.project.title}</h4>
              <span>{project.project.description}</span>
          </div>
      </div>  
      </motion.div>         
      </Col>
    
       
    </>
  )
}

export default ProjectCard
