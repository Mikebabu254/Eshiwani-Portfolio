import React, { useState } from "react";
import "./index.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Skills from "./components/Skills";

function App() {
  

  return (
    <div className="portfolio">
      <NavBar/>
      <Hero />
      <About />
      <Services />
      <Work/>
      <Skills/>
      <section className="section">

        <div className="container">

          <p className="section-label">
            05 — BEYOND CODE
          </p>

          <div className="section-heading">

            <h2>
              Technology meets
              <span>creativity.</span>
            </h2>

            <p>
              I also enjoy photography,
              videography and creative projects.
            </p>

          </div>


          <div className="creative-grid">

            <div className="creative-card">
              <div className="creative-number">
                01
              </div>

              <h3>
                Photography
              </h3>

              <p>
                Capturing people, products,
                environments and moments.
              </p>
            </div>


            <div className="creative-card">
              <div className="creative-number">
                02
              </div>

              <h3>
                Videography
              </h3>

              <p>
                Storytelling through cinematic
                video and digital content.
              </p>
            </div>


            <div className="creative-card">
              <div className="creative-number">
                03
              </div>

              <h3>
                Mindscape Podcast
              </h3>

              <p>
                Exploring ideas, technology,
                creativity and human thinking.
              </p>
            </div>

          </div>

        </div>

      </section>


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