import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Address from "./components/Address";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex-sec">
        <Contact />
        <Address />
      </div>

      <Footer />
    </div>
  );
};

export default App;
