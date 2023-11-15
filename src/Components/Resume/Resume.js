import React from "react";
import "./Resume.css";
import { Element } from "react-scroll";

function Resume() {
  return (
    <Element name="resume">
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
                      <h5> (91)8667732814</h5>
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
                        FRONT END DEVELOPER
                        <span style={{ float: "right" }}>02/2023-PRESENT</span>
                      </p>
                      <p>Vanilla Networks Pvt Ltd</p>
                      <ul className="bulletin">
                        <li>
                          Developed and managed an engaging platform where users
                          watch mystery videos and visit the website or mobile
                          app to solve the mysteries and also have developed
                          business task management applications
                        </li>
                        <li>
                          Utilized React.js, Next.js, GraphQL and Tailwind CSS
                          to enhance project performance. Utilized Redux and
                          React Context for efficient state management.
                        </li>
                        <li>
                          Collaborated closely with the client to identify and
                          meet their unique requirements and successfully
                          delivered project goals, earning the client's
                          confidence
                        </li>
                      </ul>
                      {/* <p style={{ color: "orangered" }}>
                        FINANCIAL PLANNING MANAGER
                        <span style={{ float: "right" }}>03/2021-08/2022</span>
                      </p>
                      <p>Indigra Global Enterprises, Chennai</p>
                      <ul className="bulletin">
                        <li>
                          Provide financial support to business
                          units.co-ordinate and execute monthly or annual
                          forecast analysis process with assigned business
                          units.
                        </li>
                      </ul> */}

                      <p style={{ color: "orangered" }}>
                        ASSOCIATE SOFTWARE ENGINEER
                        <span style={{ float: "right" }}>12/2016-02/2018</span>
                      </p>
                      <p>Accenture Solutions Pvt Ltd, Chennai</p>
                      <ul className="bulletin">
                        <li>
                          Developing, debugging, and testing software,
                          collaborating with team members, and maintaining code
                          quality. Also assisted in design, documentation, and
                          the software release process.
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
