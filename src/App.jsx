import React, { useState } from "react";
import "./index.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  

  return (
    <div className="portfolio">
      <NavBar/>


      {/* HERO */}
      <section id="home" className="hero">

        <div className="hero-grid"></div>

        <div className="hero-container">

          <div className="hero-text">

            <p className="eyebrow">
              WEB DEVELOPER • SYSTEMS BUILDER • TECHNOLOGIST
            </p>

            <h1>
              Building
              <span>digital solutions</span>
              that matter.
            </h1>

            <p className="hero-description">
              I'm Eshiwani Michael, a developer focused on
              web applications, mobile applications,
              business systems and cybersecurity.
            </p>

            <div className="hero-buttons">

              <a href="#work" className="button primary">
                View My Work
              </a>

              <a href="#contact" className="button secondary">
                Let's Talk
              </a>

            </div>

          </div>


          <div className="hero-visual">

            <div className="visual-circle circle-1"></div>
            <div className="visual-circle circle-2"></div>

            <div className="code-card">

              <div className="code-header">
                <div className="dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <span>developer.js</span>
              </div>

              <div className="code-body">

                <p>
                  <b>const</b> developer = {"{"}
                </p>

                <p className="indent">
                  name: <em>"Eshiwani Michael"</em>,
                </p>

                <p className="indent">
                  role: <em>"Software Developer"</em>,
                </p>

                <p className="indent">
                  location: <em>"Nairobi, Kenya"</em>,
                </p>

                <p className="indent">
                  passion: <em>"Building"</em>
                </p>

                <p>
                  {"}"};
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="section">

        <div className="container">

          <p className="section-label">
            01 — ABOUT
          </p>

          <div className="two-column">

            <h2>
              More than just
              <span>writing code.</span>
            </h2>

            <div className="about-content">

              <p>
                I'm a passionate and versatile technology
                professional with experience in web design,
                frontend development, backend development,
                mobile programming, networking and
                cybersecurity.
              </p>

              <p>
                I enjoy taking an idea from a simple concept
                and turning it into a working digital product
                that people and businesses can actually use.
              </p>

              <p>
                My approach combines technology, usability
                and problem solving to create practical
                solutions.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section id="services" className="section dark-section">

        <div className="container">

          <p className="section-label">
            02 — SERVICES
          </p>

          <div className="section-heading">

            <h2>
              What I
              <span>build.</span>
            </h2>

            <p>
              Technology solutions designed around
              real-world problems.
            </p>

          </div>


          <div className="services-grid">

            <article className="service-card">

              <div className="service-number">01</div>

              <div className="service-icon">
                &lt;/&gt;
              </div>

              <h3>
                Web Development
              </h3>

              <p>
                Modern responsive websites and web
                applications using React, JavaScript,
                Node.js and modern web technologies.
              </p>

            </article>


            <article className="service-card">

              <div className="service-number">02</div>

              <div className="service-icon">
                DB
              </div>

              <h3>
                Business Systems
              </h3>

              <p>
                Custom systems such as LMS platforms,
                POS systems, school management systems
                and other business applications.
              </p>

            </article>


            <article className="service-card">

              <div className="service-number">03</div>

              <div className="service-icon">
                APP
              </div>

              <h3>
                Mobile Development
              </h3>

              <p>
                Mobile applications designed with
                React Native and connected to reliable
                backend APIs.
              </p>

            </article>


            <article className="service-card">

              <div className="service-number">04</div>

              <div className="service-icon">
                SEC
              </div>

              <h3>
                Cybersecurity
              </h3>

              <p>
                Security-conscious applications,
                authentication, networking and
                practical cybersecurity solutions.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* WORK */}
      <section id="work" className="section">

        <div className="container">

          <p className="section-label">
            03 — SELECTED WORK
          </p>

          <div className="section-heading">

            <h2>
              Projects I've
              <span>worked on.</span>
            </h2>

          </div>


          <div className="projects-grid">

            <article className="project">

              <div className="project-image blue">
                <span>INKOGNITO</span>
              </div>

              <div className="project-info">

                <small>
                  BUSINESS TECHNOLOGY
                </small>

                <h3>
                  Inkognito Tech Solutions
                </h3>

                <p>
                  A technology business focused on
                  customized business systems, LMS
                  platforms, POS solutions and software
                  development.
                </p>

                <div className="tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Supabase</span>
                </div>

              </div>

            </article>


            <article className="project">

              <div className="project-image purple">
                <span>SCHOOL SYSTEM</span>
              </div>

              <div className="project-info">

                <small>
                  WEB APPLICATION
                </small>

                <h3>
                  School Management System
                </h3>

                <p>
                  A management platform designed to
                  handle students, staff, academics,
                  authentication and school operations.
                </p>

                <div className="tags">
                  <span>React</span>
                  <span>Express</span>
                  <span>Supabase</span>
                </div>

              </div>

            </article>


            <article className="project">

              <div className="project-image green">
                <span>INSURANCE</span>
              </div>

              <div className="project-info">

                <small>
                  BUSINESS SYSTEM
                </small>

                <h3>
                  Insurance Broker System
                </h3>

                <p>
                  A system for managing agents, clients,
                  policies, KYC information and payment
                  processes.
                </p>

                <div className="tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Daraja</span>
                </div>

              </div>

            </article>


            <article className="project">

              <div className="project-image orange">
                <span>MOBILE APP</span>
              </div>

              <div className="project-info">

                <small>
                  MOBILE DEVELOPMENT
                </small>

                <h3>
                  Mobile Applications
                </h3>

                <p>
                  Mobile application interfaces and
                  experiences developed using React Native
                  and modern API architectures.
                </p>

                <div className="tags">
                  <span>React Native</span>
                  <span>Expo</span>
                  <span>API</span>
                </div>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* SKILLS */}
      <section id="skills" className="section dark-section">

        <div className="container">

          <p className="section-label">
            04 — SKILLS
          </p>

          <div className="skills-layout">

            <div>

              <h2>
                My technical
                <span>toolbox.</span>
              </h2>

              <p className="skills-description">
                I work across the frontend, backend,
                database, mobile and infrastructure
                layers of technology.
              </p>

            </div>


            <div className="skills-list">

              <div className="skill">

                <div>
                  <span>React / JavaScript</span>
                  <span>85%</span>
                </div>

                <div className="skill-bar">
                  <span style={{ width: "85%" }}></span>
                </div>

              </div>


              <div className="skill">

                <div>
                  <span>Node.js / Express</span>
                  <span>78%</span>
                </div>

                <div className="skill-bar">
                  <span style={{ width: "78%" }}></span>
                </div>

              </div>


              <div className="skill">

                <div>
                  <span>Supabase / SQL</span>
                  <span>76%</span>
                </div>

                <div className="skill-bar">
                  <span style={{ width: "76%" }}></span>
                </div>

              </div>


              <div className="skill">

                <div>
                  <span>React Native</span>
                  <span>68%</span>
                </div>

                <div className="skill-bar">
                  <span style={{ width: "68%" }}></span>
                </div>

              </div>


              <div className="skill">

                <div>
                  <span>Networking</span>
                  <span>62%</span>
                </div>

                <div className="skill-bar">
                  <span style={{ width: "62%" }}></span>
                </div>

              </div>


              <div className="skill">

                <div>
                  <span>Cybersecurity</span>
                  <span>58%</span>
                </div>

                <div className="skill-bar">
                  <span style={{ width: "58%" }}></span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CREATIVE */}
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