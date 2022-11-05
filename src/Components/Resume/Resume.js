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
            <div className="row m-0">
              <div className="col-md-1 col-lg-1 col-sm-1 titleCard">
                <h1 id="title">SUMMARY</h1>
              </div>
              <div className="col-md-3 col-lg-5 col-sm-1 titleContentCard">
                <div className="card">
                  <div className="card-body">
                    <h2>BANU PRIYA MOHANRAJ</h2>
                    <h5>Chennai,India</h5>
                    <h5> (91)7358383981</h5>
                    <h5>banupriyamohanrajoffl@gmail.com</h5>
                  </div>
                </div>
                <br />
                <div className="card">
                  <div className="card-body">
                    <p>EDUCATION</p>
                    <p style={{ color: "orangered" }}>
                      Msc Information system Management{" "}
                      <span style={{ float: "right" }}>01/2019-06/2020</span>
                    </p>
                    <p>De Montfort University</p>
                    <p>Leicester,United Kingdom</p>
                    {/* <p>CGPA - 7</p> */}
                    <p style={{ color: "orangered" }}>
                      B.Tech Information Technology{" "}
                      <span style={{ float: "right" }}>08/2012-04/2016</span>
                    </p>
                    <p>Sri Venkateswara college of Engineering</p>
                    <p>Chennai,India</p>
                    {/* <p>CGPA - 6.5</p> */}
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
                        FINANCIAL PLANNING MANAGER
                       
                      <span style={{ float: "right" }}>03/2020-08/2022</span>
                    </p>
                    <p>Indigra Global Enterprises, Chennai</p>
                    <ul className="bulletin">
                      <li>
                        Provide financial support to business units.co-ordinate and execute monthly or annual forecast analysis process with assigned business units.
                      </li>
                      <li>
                        Proactively resolve MIS Issues impacting performance.co-ordinate and execute the review of monthly reporting and results process with assigned business units.
                      </li>
                    </ul>
                    

                    <p style={{ color: "orangered" }}>
                      AUTOMATION TESTER
                      <span style={{ float: "right" }}>12/2016-02/2018</span>
                    </p>
                    <p>Accenture Solutions Pvt Ltd, Chennai</p>
                    <ul className="bulletin">
                      <li>
                     Created accurate and efficient test scripts in Selenium, UFT to manage automated testing of certain products and features.
                      </li>
                      <li>
                      Analysing the application and testing the application through automation.Performing test execution in automation testing tools.     
                      </li>
                      <li>
                      Identified and tracked defects with HP ALM and supported developers in resolving problems by completing additional tests.
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
