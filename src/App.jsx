import React, { useState } from "react";
import "./index.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Creative from "./components/Creative";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="portfolio">
      <NavBar/>
      <Hero />
      <About />
      <Services />
      <Work/>
      <Skills/>
      <Creative/>
      <Contact/>
      <Footer />  
    </div>
  );
}

export default App;