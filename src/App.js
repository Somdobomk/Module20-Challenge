import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Card from './components/Card';
import About from './components/About';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
      Aos.init({
        once: true,
      })
    })
  return (
    <div className='min-h-screen py-10 px-3 sm:px-5 bg-gray-100'>
      <div data-aos='fade-down' data-aos-duration='800'>
      <Navbar />
      </div>
      <div
      data-aos='fade-zoom-in'
      data-aos-easing='ease-in-back'
      data-aos-delay='300'
      data-aos-duration='800'
      >
        <Card />
      </div>
      <div data-aos='fade-up' data-aos-duration='800' data-aos-delay='400'>
        <About />
      </div>
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
    //   <Routes>
    //     <Route path='/' element={<Card />} />
    //     <Route path='/about' element={<About />} />
    //     <Route path='/skills' element={<Skills />} />
    //     <Route path='/projects' element={<Projects />} />
    //     <Route path='/contact' element={<ContactMe />} />

    // <div className='min-h-screen py-10 px-3 sm:px-5 bg-gray-100'>
    //   <div data-aos='fade-down' data-aos-duration='800'>
    //     <Card />
    //   </div>
    //   <div data-aos='fade-up' data-aos-duration='800' data-aos-delay='400'>
    //     <About />
    //   </div>
    //   <Skills />
    //   <Projects />
    //   <ContactMe />
    //   <Footer />
    // </div>
    // </Routes>
  );
}

export default App;
