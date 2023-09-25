import {BrowserRouter} from 'react-router-dom';
// import {Navbar,Hero} from './components/Navbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
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
      </div>
    </BrowserRouter>
  )
}

export default App
