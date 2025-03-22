import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Classes from './components/Classes';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Classes />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;