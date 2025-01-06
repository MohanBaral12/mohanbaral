import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { GlobalStyles, theme } from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ParticlesBackground />
      <AnimatePresence mode="wait">
        <div className="app">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Portfolio />
            <Skills />
            <Contact />
          </main>
        </div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
