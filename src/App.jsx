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


      {/* CONTACT */}
      <section id="contact" className="contact-section">

        <div className="container">

          <div className="contact-box">

            <p className="section-label">
              06 — CONTACT
            </p>

            <h2>
              Let's build something
              <span>great together.</span>
            </h2>

            <p>
              Have an idea for a website, application
              or business system? Let's discuss it.
            </p>

            <a
              href="mailto:your-email@example.com"
              className="button primary"
            >
              Start a conversation →
            </a>

          </div>

        </div>

      </section>
      <Footer />  

    </div>
  );
}

export default App;