import React from "react";
import "./Resume.css";
import { Element } from 'react-scroll'

function Resume() {
  return (<Element name="resume">
    <div className="Resume__Container">
      <div class="diagonal-box">
        <div class="content">
          <h1>RESUME</h1>
         
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-1 col-lg-1 col-sm-1 titleCard">
                <h1 id="title">SUMMARY</h1>
              </div>
              <div className="col-md-3 col-lg-5 col-sm-1 titleContentCard">
                <div className="card">
                  <div className="card-body">
                    <h2>BANU PRIYA MOHANRAJ</h2>
                    <h6>Chennai,India</h6>
                    <h6> (91)7358383981</h6>
                    <h6>banupriyamohanrajoffl@gmail.com</h6>
                  </div>
                </div>
                <br />
                <div className="card">
                  <div className="card-body">
                    <p>Education:</p>
                    <p style={{ color: "orangered" }}>
                      Msc Information system Management{" "}
                      <span style={{ float: "right" }}>01/2019-06/2020</span>
                    </p>
                    <p>De Montfort University,United Kingdom</p>
                    <p>CGPA - 6.5</p>
                    <p style={{ color: "orangered" }}>
                      B.Tech Information Technology{" "}
                      <span style={{ float: "right" }}>08/2012-04/2016</span>
                    </p>
                    <p>Sri Venkateswara college of Engineering,Chennai</p>
                    <p>CGPA - 6.5</p>
                  </div>
                </div>
              </div>
              <div className="col-md-1 col-lg-1 col-sm-1 titleCard">
                <h1 id="title">EXPERIENCE</h1>
              </div>
              <div className="col-md-3 col-lg-5 col-sm-1 titleContentCard">
                <div className="card">
                  <div className="card-body">
                    <p style={{ color: "orangered" }}>
                      SYSTEM ADMIN
                      <span style={{ float: "right" }}>10/2019-06/2020</span>
                    </p>
                    <p>A and C Fuels Ltd,United Kingdom</p>
                    <ul className="bulletin">
                      <li>
                        Involved in designing,updating and supporting the
                        company's computer systems.
                      </li>
                      <li>
                        Performing daily system monitoring,verify the integrity
                        and availability of all hardware server resources.
                      </li>
                    </ul>

                    <p style={{ color: "orangered" }}>
                      AUTOMATION TESTER
                      <span style={{ float: "right" }}>12/2016-02/2018</span>
                    </p>
                    <p>Accenture Solutions Pvt Ltd,Chennai</p>
                    <ul className="bulletin">
                      <li>
                        Created accurate and efficient test scripts in Selenium,
                        UFT to manage automated testing of certain products and
                        features.
                      </li>
                      <li>
                        Analysing test results, capturing overall test coverage
                        and efficiency, comparing with expected business SLA.
                      </li>
                      <li>
                        Identified and tracked defects with HP ALM and supported
                        developers in resolving problems by completing
                        additional tests
                      </li>
                      <li>
                        Effectively interacted with Developing and Support
                        departments regarding software defects, worked closely
                        to develop innovative solutions.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </div>
    </Element>
  );
}

export default Resume;
