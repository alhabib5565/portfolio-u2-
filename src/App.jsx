import React from 'react';
import Navbar from './Componect/Navbar';
import ChatBot from './Componect/ChatBot';
import Hero from './Componect/Hero';
import Social from './Componect/Social';
import AboutMe from './Componect/AboutMe';
import Skills from './Componect/Skills';
import Projects from './Componect/Projects';
import Contact from './Componect/Contact';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Social/>
      <ChatBot/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default App;