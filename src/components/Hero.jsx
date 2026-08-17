function Hero() {
      return (
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
      );

}

export default Hero;


