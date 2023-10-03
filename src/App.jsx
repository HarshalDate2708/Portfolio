import {BrowserRouter} from 'react-router-dom';
// import {Navbar,Hero} from './components/Navbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StarsCanvas from './components/Canvas/Stars';
const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'> 
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
            {/* <p>Harshal</p> */}
          </div>
          <About />
          <Skills />
          <Projects />
          <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
