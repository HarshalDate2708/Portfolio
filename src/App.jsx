import {BrowserRouter} from 'react-router-dom';
// import {Navbar,Hero} from './components/Navbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StarsCanvas from './components/Canvas/Stars';
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'> 
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
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
          <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
