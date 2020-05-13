import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Address from './components/Address';
import Footer from './components/Footer';



const App = () => {
    return (
      <div>
      <Navbar />
      <Hero />
      <Contact />
      <Address />
      <Footer />
      </div>
    );
};

export default App;