import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import 'animate.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
