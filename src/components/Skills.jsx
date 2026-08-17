function Skills(){
      return(
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
      );
}

export default Skills;