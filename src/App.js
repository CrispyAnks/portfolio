import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import 'animate.css';
import {React, useEffect, useState} from 'react';


function App() {
  const [lan, setLan] = useState('eng');
  const setLanguage = () => {
    if(lan === 'jpn'){
      setLan('eng');
      console.log(lan);
    }else{
      setLan('jpn');
      console.log(lan);
    }    
  }
  useEffect(() => {
    console.log(lan);
  }, [lan])
  return (
    <div className="App">
      <NavBar onClick={setLanguage} lan={lan}/>
      <Banner lan={lan}/>
      <About lan={lan}/>
      <Skills lan={lan}/>
      <Projects lan={lan}/>
      <Footer lan={lan}/>
    </div>
  );
}

export default App;
