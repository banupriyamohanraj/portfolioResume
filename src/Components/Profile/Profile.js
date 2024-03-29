import React from "react";
import "./Profile.css";
import Fade from "react-reveal/Fade";

import { Element } from "react-scroll";
import Typewriter from "typewriter-effect";

function Profile() {
  const pdf = "https://drive.google.com/file/d/1nRUCh5SwgVbuhBMciZ0V7v-7kv3fsakC/view?usp=drivesdk"
    return (
    <Element name="about">
      <div className="container-fluid Profile__container">
        <div className="row m-0">
          <Fade right>
            <div className="col-12">
              <h1>Hello,</h1>
              <h3>
                I'm <span id="name">BANU PRIYA</span>
              </h3>
              <br />
              <h4>
                <Typewriter
                  options={{
                    strings: [
                      "Full Stack Developer",
                      "MERN Stack Developer",
                      "Web Developer",
                      "Photographer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h4>
              <br />
              <h5>Passionate about creating Web applications.</h5>
              <br />
              <div className="resumeButton">
                <a href={pdf} target="_blank" rel="noreferrer" className="link">
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    id="resumebutton"
                  >
                    Resume <i class="fas fa-download fa 2x"></i>
                  </button>
                </a>
              </div>

              <br />
              <div className="button__container">
                &emsp;
                <a
                  href="https://www.linkedin.com/in/banu-priya-mohanraj-74331b19b"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                >
                  <i class="fa fa-3x fa-linkedin" aria-hidden="true"></i>
                </a>
                &emsp;
                <a
                  href="https://github.com/banupriyamohanraj"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                >
                  <i class="fa fa-3x fa-github" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Element>
  );
}

export default Profile;
